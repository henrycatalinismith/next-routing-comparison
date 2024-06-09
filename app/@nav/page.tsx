import Link from "next/link";
import { links } from "@/src/nav";

export default async function Nav() {
  const navLinks = await links();
  return (
    <>
      <ul>
        {navLinks.map(({ href, text }) => (
          <li key={href}>
            <Link className="underline text-blue-600" href={href}>
              {text}
            </Link>
          </li>
        ))}
      </ul>
      <details>
        <summary>Details</summary>
        <p>Details content</p>
      </details>
    </>
  );
}
