import { delay } from "@/src/delay";
export async function links() {
  await delay(1000);
  return [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/contact", text: "Contact" },
  ];
}
