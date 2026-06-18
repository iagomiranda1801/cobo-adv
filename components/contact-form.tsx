"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = `Olá, meu nome é ${name}. Telefone: ${phone}.\n\n${message}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 rounded-sm border border-black/10 bg-white p-6 shadow-soft sm:p-10">
      <div>
        <label htmlFor="name" className="mb-2 block text-[0.68rem] font-bold uppercase tracking-[0.18em] text-black/55">Seu nome</label>
        <input id="name" value={name} onChange={(e) => setName(e.target.value)} required autoComplete="name" placeholder="Como podemos chamar você?" className="field" />
      </div>
      <div>
        <label htmlFor="phone" className="mb-2 block text-[0.68rem] font-bold uppercase tracking-[0.18em] text-black/55">Telefone</label>
        <input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required autoComplete="tel" inputMode="tel" placeholder="(34) 99999-9999" className="field" />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-[0.68rem] font-bold uppercase tracking-[0.18em] text-black/55">Como podemos ajudar?</label>
        <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required rows={4} placeholder="Conte brevemente sobre sua necessidade jurídica." className="field resize-none" />
      </div>
      <button type="submit" className="group mt-2 flex items-center justify-between bg-ink px-6 py-4 text-left text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-gold-600">
        Enviar pelo WhatsApp
        <ArrowUpRightIcon className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </button>
      <p className="text-xs leading-5 text-black/45">Ao enviar, você será direcionado ao WhatsApp para concluir o contato.</p>
    </form>
  );
}
