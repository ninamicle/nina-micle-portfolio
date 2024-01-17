"use client";
import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import clsx from "clsx";
import { FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const [touchedInput, setTouchedInput] = useState<boolean>();
  const [touchedTextarea, setTouchedTextarea] = useState<boolean>();

  console.log(touchedInput);
  return (
    <section id="contact">
      <SectionHeader color="accent" title="Contattami" />
      <div className="flex gap-3 justify-center">
        Scrivi una mail a
        <a href="mailto:nina.micleusanu93@gmail.com" className="underline">
          nina.micleusanu93@gmail.com
        </a>
        oppure compila il form
      </div>
      <div className="flex justify-center p-4 w-full">
        <form
          action="https://formsubmit.co/604a0f134e7539b964b1c84f1c28304e"
          method="POST"
          className="flex flex-col items-center gap-3 w-full"
        >
          <input
            className={clsx("form-input", { "bg-primary": touchedInput })}
            type="email"
            name="email"
            placeholder="Inserisci il tuo indirizzo email"
            required
            onChange={() => setTouchedInput(true)}
          />
          <textarea
            className={clsx("form-textarea", { "bg-primary": touchedTextarea })}
            name="message"
            placeholder="Inserisci il tuo messaggio"
            required
            rows={5}
            onChange={() => setTouchedTextarea(true)}
          />
          <button className="form-button group" type="submit">
            Invia
            <span className="transition-all group-hover:translate-x-1 group-hover:-translate-y-1">
              <FaPaperPlane />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}
