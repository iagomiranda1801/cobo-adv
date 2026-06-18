"use client";

import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Logo } from "./logo";
import { whatsappUrl } from "@/lib/contact";

const links = [
  ["Início", "#inicio"],
  ["Sobre", "#sobre"],
  ["Áreas de atuação", "#areas"],
  ["Diferenciais", "#diferenciais"],
  ["Contato", "#contato"],
];

const whatsappHref = whatsappUrl(
  "Olá, gostaria de agendar um atendimento com a COBO Advocacia.",
);

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${scrolled || open ? "border-white/10 bg-ink/95 shadow-xl backdrop-blur-xl" : "border-transparent bg-transparent"}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#inicio" aria-label="Ir para o início"><Logo light /></a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-xs font-semibold uppercase tracking-[0.12em] text-white/70 transition hover:text-gold-300">{label}</a>
          ))}
        </nav>
        <a href={whatsappHref} target="_blank" rel="noreferrer" className="hidden border border-gold-400/70 px-5 py-3 text-[0.68rem] font-bold uppercase tracking-[0.15em] text-gold-300 transition hover:bg-gold-400 hover:text-ink lg:inline-flex">
          Falar com advogado
        </a>
        <button type="button" onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center text-white lg:hidden" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open}>
          {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>
      <div className={`overflow-hidden border-t border-white/10 bg-ink transition-all duration-300 lg:hidden ${open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"}`}>
        <nav className="flex flex-col px-5 py-6" aria-label="Navegação mobile">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="border-b border-white/10 py-4 font-display text-xl text-white/90">{label}</a>
          ))}
          <a href={whatsappHref} target="_blank" rel="noreferrer" className="mt-6 bg-gold-gradient px-5 py-4 text-center text-xs font-bold uppercase tracking-[0.14em] text-ink">Falar com advogado</a>
        </nav>
      </div>
    </header>
  );
}
