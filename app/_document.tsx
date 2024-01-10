import { Head } from "next/document";
import React from "react";

export default function _document() {
  return (
    <Head>
      {/* preconnect scripts... */}
      <link
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
}
