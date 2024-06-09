"use client";

import Link from "next/link";
import { links } from "@/src/nav";
import { content } from "@/src/main";
import { useEffect, useState } from "react";

export default function AboutPage() {
  const [navLinks, setNavLinks] = useState<{ href: string; text: string }[]>(
    []
  );
  const [__html, setHtml] = useState<string>("");

  useEffect(() => {
    links().then((l) => setNavLinks(l));
    content["/about"]().then((c) => setHtml(c));
  }, []);

  return (
    <>
      <nav className="flex flex-col w-[256px] border-r-2 border-black h-dvh p-2">
        {navLinks.length === 0 ? (
          <p>loading...</p>
        ) : (
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
        )}
      </nav>
      <main className="p-2">
        {__html === "" ? (
          <p>loading...</p>
        ) : (
          <div dangerouslySetInnerHTML={{ __html }} />
        )}
      </main>
    </>
  );
}
