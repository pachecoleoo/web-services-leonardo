"use client";

import Image from "next/image";
import { useState } from "react";

const links = [
  { label: "Proyectos", href: "#proyectos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Proceso", href: "#proceso" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#080808]/85 text-white backdrop-blur-2xl">
      <div className="mx-auto flex h-[76px] max-w-[1600px] items-center justify-between gap-6 px-6 sm:px-10 lg:px-16">
        <a href="#inicio" onClick={() => setOpen(false)} aria-label="Leonardo Web Services, ir al inicio" className="relative z-10 flex shrink-0 items-center gap-3">
          <Image src="/logo-blanco.png" alt="Leonardo Web Services" width={112} height={66} priority className="h-12 w-auto object-contain" />
          <span className="hidden border-l border-white/20 pl-3 text-[9px] font-bold uppercase leading-relaxed tracking-[.2em] text-white/50 xl:block">Digital<br/>Studio</span>
        </a>
        <nav aria-label="Navegación principal" className="hidden items-center gap-8 lg:flex">
          {links.map(link => <a key={link.href} href={link.href} className="text-[11px] font-bold uppercase tracking-[.15em] text-white/65 transition hover:text-[#2896a4]">{link.label}</a>)}
        </nav>
        <a href="#contacto" className="ml-auto hidden items-center gap-5 rounded-full border border-white/25 px-5 py-3 text-[11px] font-bold uppercase tracking-[.14em] transition hover:border-[#2896a4] hover:bg-[#2896a4] lg:inline-flex">Empecemos <span aria-hidden="true">↗</span></a>
        <button type="button" className="relative z-10 flex min-h-11 items-center gap-3 rounded-full border border-white/25 px-4 text-xs font-bold uppercase tracking-[.13em] lg:hidden" onClick={() => setOpen(v => !v)} aria-controls="mobile-menu" aria-expanded={open} aria-label={open ? "Cerrar menú" : "Abrir menú"}>
          {open ? "Cerrar" : "Menú"} <span className="text-[#2896a4]" aria-hidden="true">{open ? "×" : "+"}</span>
        </button>
      </div>
      <div id="mobile-menu" className={"overflow-hidden bg-[#080808] transition-[max-height,opacity] duration-300 lg:hidden " + (open ? "max-h-[550px] border-t border-white/10 opacity-100" : "max-h-0 opacity-0")}>
        <nav aria-label="Navegación móvil" className="flex flex-col px-6 py-5 sm:px-10">
          {links.map((link, i) => <a key={link.href} onClick={() => setOpen(false)} href={link.href} className="flex items-center justify-between border-b border-white/10 py-4 text-2xl font-black uppercase tracking-tight"><span>{link.label}</span><span className="text-xs text-[#2896a4]">0{i+1} ↗</span></a>)}
          <a href="#contacto" onClick={() => setOpen(false)} className="mt-6 flex items-center justify-between rounded-full bg-[#2896a4] px-6 py-4 text-sm font-bold uppercase">Hablemos <span aria-hidden="true">↗</span></a>
        </nav>
      </div>
    </header>
  );
}
