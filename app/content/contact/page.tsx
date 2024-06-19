"use client";

import { content } from "@/src/main";
import { useEffect, useState } from "react";

export default function ContactPage() {
  const [__html, setHtml] = useState<string>("");

  useEffect(() => {
    content["/contact"]().then((c) => setHtml(c));
  }, []);

  return (
    <>
      {__html === "" ? (
        <p>loading...</p>
      ) : (
        <div dangerouslySetInnerHTML={{ __html }} />
      )}
    </>
  );
}
