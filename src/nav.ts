import { delay } from "@/src/delay";
export async function links() {
  await delay(1000);
  return [
    { href: "/content", text: "Home" },
    { href: "/content/about", text: "About" },
    { href: "/content/contact", text: "Contact" },
  ];
}
