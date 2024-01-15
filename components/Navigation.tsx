"use client";
import React from "react";
import { links } from "../lib/data";

export default function Navigation() {
  return (
    <section className="bg-primary lg:rounded-lg w-full flex justify-between items-center p-6 text-white">
      <ul className="flex gap-4 justify-center items-center">
        {links.map((link) => (
          <li key={link.hash} className="cursor-pointer">
            <a href={link.hash}>{link.name}</a>
          </li>
        ))}
      </ul>
      <div className="italic flex gap-1">
        <span className="cursor-pointer">IT</span>
        <span>/</span>
        <span className="cursor-pointer">EN</span>
      </div>
    </section>
  );
}
