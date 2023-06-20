import Editor from "@/ui/editor";
import Github from "@/ui/shared/github";

export default function Page() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center sm:px-5 sm:pt-[calc(8vh)]">
        <Editor />
      </div>
    </>
  );
}
