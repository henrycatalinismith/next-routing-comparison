import { content } from "@/src/main";

export default async function HomePage() {
  const __html = await content["/"]();
  return <div dangerouslySetInnerHTML={{ __html }} />;
}
