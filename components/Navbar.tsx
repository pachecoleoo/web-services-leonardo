"use client";

import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { label: "Proyectos", href: "#proyectos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Sobre mí", href: "#sobre-mi" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/85 text-white backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-6 md:px-10 lg:px-16">
        <a href="#inicio" onClick={closeMenu} aria-label="Ir al inicio">
          <Image
            src="/logo-blanco.png"
            alt="Leonardo Web Services"
            width={100}
            height={60}
            priority
            className="h-14 w-auto object-contain"
          />
        </a>

        <nav
          className="hidden items-center gap-9 md:flex"
          aria-label="Navegación principal"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-bold uppercase tracking-[0.13em] text-white/80 transition-colors hover:text-[#2896a4]"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contacto"
            className="rounded-full border border-white/40 px-6 py-3 text-xs font-bold uppercase tracking-[0.13em] transition-all hover:border-[#2896a4] hover:bg-[#2896a4]"
          >
            Hablemos
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-[6px] rounded-full border border-white/25 md:hidden"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          <span
            className={`h-[2px] w-5 bg-white transition-transform ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />

          <span
            className={`h-[2px] w-5 bg-white transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          />

          <span
            className={`h-[2px] w-5 bg-white transition-transform ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`overflow-hidden border-white/10 bg-black transition-all duration-300 md:hidden ${
          menuOpen
            ? "max-h-96 border-t opacity-100"
            : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-6" aria-label="Navegación móvil">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="border-b border-white/10 py-5 text-lg font-bold uppercase tracking-tight transition-colors hover:text-[#2896a4]"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contacto"
            onClick={closeMenu}
            className="mt-6 flex items-center justify-between rounded-full bg-[#2896a4] px-6 py-4 text-sm font-bold uppercase tracking-wider"
          >
            Hablemos
            <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
