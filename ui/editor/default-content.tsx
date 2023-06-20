const DEFAULT_EDITOR_CONTENT = {
  type: "doc",
    content: [
      {
        type: "heading",
        attrs: { level: 1 },
        content: [{ type: "text", text: "Marky - 极简概念编辑器" }],
      },
      {
        type: "paragraph",
        content: [
          {type: "text",text: "Hello！ Marky是一个" },
          { type: "text", marks: [{ type: "code" }], text: " 概念风格 " },
          { type: "text", text: "、" },
          { type: "text", marks: [{ type: "code" }], text: " 实时预览 " },
          { type: "text", text: "、" },
          { type: "text", marks: [{ type: "code" }], text: " 自动保存 " },
          { type: "text", text: "的 本地随手记型编辑器，内置" },
          { type: "text", marks: [{ type: "code" }], text: " ChatGPT " },
          {type: "text", text: "驱动的自动补充功能。 " },
          ],
        },
      {
        type: "paragraph",
          content: [
          {type: "text",text: "更多介绍请看 " },
          {
                    type: "text",
                    marks: [
                      {
                        type: "link",
                        attrs: {
                          href: "https://blog.azad.asia/marky",
                          target: "_blank",
                          class:
                            "text-stone-400 underline underline-offset-[3px] hover:text-stone-600 transition-colors cursor-pointer",
                        },
                      },
                    ],
                    text: "Marky - 极简概念编辑器",
                  },
          {type: "text",text: "。 " },
        ],
      },
      {
        type: "heading",
        attrs: { level: 2 },
        content: [{ type: "text", text: "使用帮助" }],
      },
      {
        type: "orderedList",
        attrs: { start: 1 },
        content: [
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                content: [
                  { type: "text", text: "默认使用" },
                  { type: "text", marks: [{ type: "code" }], text: " MarkDown " },
                  { type: "text", text: "语法。如果你不懂MD语法，可以查看 " },
                  {
                    type: "text",
                    marks: [
                      {
                        type: "link",
                        attrs: {
                          href: "https://markdown.com.cn/basic-syntax/",
                          target: "_blank",
                          class:
                            "text-stone-400 underline underline-offset-[3px] hover:text-stone-600 transition-colors cursor-pointer",
                        },
                      },
                    ],
                    text: "官方教程",
                  },
                  { type: "text", text: "。10分钟简单入门即可。" },
                ],
              },
            ],
          },
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                content: [
                  { type: "text", text: "当然，不会MD语法也没关系。你可以把它当做一个单纯的文本编辑器，所有内容均保存于本地浏览器中。" },
                ],
              },
            ],
          }, 
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                content: [
                  { type: "text", text: "图片可拖动或粘贴插入（支持最大50MB）。网页链接粘贴识别。" },
                ],
              },
            ],
          }, 
          {
           type: "listItem",
            content: [
              {
                type: "paragraph",
                content: [
                  { type: "text", text: "输入 " },
                  { type: "text", marks: [{ type: "code" }], text: "空格" },
                  { type: "text", text: " + " },
                  { type: "text", marks: [{ type: "code" }], text: " / " },
                  { type: "text", text: " 查看帮助；输入 " },
                  { type: "text", marks: [{ type: "code" }], text: " == " },
                  { type: "text", text: " 调用 AI 提供补充。" },
                ],
              },
            ],
          },
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                content: [
                  { type: "text", text: "默认调用" },
                  { type: "text", marks: [{ type: "code" }], text: " gpt-3.5-turbo " },
                  { type: "text", text: " ，AI 单次生成 token 限制为 120。" },
                ],
              },
            ],
          }, 
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                content: [
                  { type: "text", text: "AI会根据前文进行联想补充，方便自主创作，但请勿过于依赖AI生成功能（调用过快会显示【稍后重试】）。" },
                ],
              },
            ],
          },
           {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                content: [
                  { type: "text", text: "支持常用快捷键：加粗【Ctrl + B】、倾斜【Ctrl + I】、撤销【Ctrl + Z】、恢复【Ctrl + Y】。" },
                ],
              },
            ],
          },
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                content: [
                   { type: "text", text: "🎉 现在你可以清空页面，开始你的创作啦。更多实用工具在" },
                  {
                    type: "text",
                    marks: [
                      {
                        type: "link",
                        attrs: {
                          href: "https://t.zsxq.com/0cy1WzxXu",
                          target: "_blank",
                          class:
                            "text-stone-400 underline underline-offset-[3px] hover:text-stone-600 transition-colors cursor-pointer",
                        },
                      },
                    ],
                    text: "不止GPT",
                  },
                  { type: "text", text: " 星球群。如果你喜欢这个小工具，欢迎对我进行" },
                   {
                    type: "text",
                    marks: [
                      {
                        type: "link",
                        attrs: {
                          href: "http://www.azad.asia/dashang/",
                          target: "_blank",
                          class:
                            "text-stone-400 underline underline-offset-[3px] hover:text-stone-600 transition-colors cursor-pointer",
                        },
                      },
                    ],
                    text: "赞赏",
                  },
                  { type: "text", text: " 😁" },
                ],
              },
            ],
          },
        ],
      },
      { type: "paragraph" },
    ],
  }

export default DEFAULT_EDITOR_CONTENT;
