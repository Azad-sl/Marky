import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { kv } from "@vercel/kv";
import { Ratelimit } from "@upstash/ratelimit";

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

export const runtime = "edge";

export async function POST(req: Request): Promise<Response> {
  if (
    process.env.NODE_ENV != "development" &&
    process.env.KV_REST_API_URL &&
    process.env.KV_REST_API_TOKEN
  ) {
    const ip = req.headers.get("x-forwarded-for");
    const ratelimit = new Ratelimit({
      redis: kv,
      limiter: Ratelimit.slidingWindow(50, "1 d"),
    });

    const { success, limit, reset, remaining } = await ratelimit.limit(
      `novel_ratelimit_${ip}`,
    );

    if (!success) {
      return new Response("You have reached your request limit for the day.", {
        status: 429,
        headers: {
          "X-RateLimit-Limit": limit.toString(),
          "X-RateLimit-Remaining": remaining.toString(),
          "X-RateLimit-Reset": reset.toString(),
        },
      });
    }
  }

  let { prompt: content } = await req.json();

  // remove line breaks,
  // remove trailing slash,
  // remove "✍..." if present
  // limit to 5000 characters
  content = content
    .replace(/\n/g, " ")
    .replace(/\/$/, "")
    .replace("✍...", "")
    .slice(0, 5000);

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "你是一名AI写作助手，根据先前文本的上下文续写现有文本。请判断先前文本的创作主体，并代入到这个创作主体的身份，你将作为先前文本的创作主体并且根据先前文本描述来进行续写，注意语言风格、情感表达要与先前文本相同，逻辑要与先前文本接续。注意不是在进行对话，而是在续写文本。举个例子：假如先前文本是“你好小明，这是我第一次给你写信，你过得好吗？”这个先前文本的创作主体是“我”（我在给小明写信），你必须代入到“我”这个角色中，接着给小明，也就是“你”写信。 " +
          "Give more weight/priority to the later characters than the beginning ones. Make sure to construct complete sentences.",
      },
      {
        role: "user",
        content,
      },
    ],
    max_tokens: 120,
    temperature: 0.8,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stream: true,
    n: 1,
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);

  // Respond with the stream
  return new StreamingTextResponse(stream);
}
