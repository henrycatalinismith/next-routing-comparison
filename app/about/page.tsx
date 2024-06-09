import { content } from "@/src/main";

export default async function AboutPage() {
  const __html = await content["/about"]();
  return <div dangerouslySetInnerHTML={{ __html }} />;
}
