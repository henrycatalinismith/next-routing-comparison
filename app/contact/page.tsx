import { content } from "@/src/main";

export default async function ContactPage() {
  const __html = await content["/contact"]();
  return <div dangerouslySetInnerHTML={{ __html }} />;
}
