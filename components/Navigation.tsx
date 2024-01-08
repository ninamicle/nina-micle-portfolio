import React from "react";
import { links } from "../lib/data";

export default function Navigation() {
  return (
    <section>
      <ul className="menu menu-vertical lg:menu-horizontal bg-primary rounded-box">
        {links.map((link) => (
          <li key={link.hash}>{link.name}</li>
        ))}
      </ul>
    </section>
  );
}
