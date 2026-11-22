"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
const footerLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Contacto", href: "#contacto" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/leonardowebservices",
    icon: <InstagramIcon />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/TUUSUARIO",
    icon: <LinkedInIcon />,
  },
  {
    label: "GitHub",
    href: "https://github.com/TUUSUARIO",
    icon: <GitHubIcon />,
  },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let animationFrame = 0;

    const updateProgress = () => {
      if (!footerRef.current) return;

      const footerTop = footerRef.current.offsetTop;
      const viewportHeight = window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;

      // Empieza cuando el footer entra por abajo.
      const animationStart = footerTop - viewportHeight;

      // Termina cuando llegamos al final real de la página.
      const animationEnd = pageHeight - viewportHeight;

      const totalDistance = Math.max(animationEnd - animationStart, 1);
      const currentDistance = window.scrollY - animationStart;

      const progress = Math.min(
        Math.max(currentDistance / totalDistance, 0),
        1,
      );

      setScrollProgress(progress);
    };

    const handleScroll = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(updateProgress);
    };

    updateProgress();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);
  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden rounded-t-[1.25rem] bg-black px-6 pb-8 pt-20 text-white md:px-10 lg:px-16"
    >
      {/* Fondo animado por scroll */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden bg-black">
        {/* Celeste */}
        <div
          className="absolute -left-[20%] -top-48 h-[520px] w-[65%] rounded-full bg-[#2896a4] blur-[90px] will-change-transform"
          style={{
            opacity: 0.18 + scrollProgress * 0.62,
            transform: `
        translate3d(
          ${scrollProgress * 160}px,
          ${scrollProgress * 150}px,
          0
        )
        scale(${0.85 + scrollProgress * 0.5})
      `,
          }}
        />

        {/* Rojo */}
        <div
          className="absolute left-[20%] -top-56 h-[560px] w-[65%] rounded-full bg-[#d13439] blur-[100px] will-change-transform"
          style={{
            opacity: 0.15 + scrollProgress * 0.58,
            transform: `
        translate3d(
          ${scrollProgress * 80}px,
          ${scrollProgress * 190}px,
          0
        )
        scale(${0.8 + scrollProgress * 0.55})
      `,
          }}
        />

        {/* Naranja */}
        <div
          className="absolute -right-[20%] -top-44 h-[500px] w-[60%] rounded-full bg-[#ea743c] blur-[90px] will-change-transform"
          style={{
            opacity: 0.16 + scrollProgress * 0.6,
            transform: `
        translate3d(
          ${scrollProgress * -170}px,
          ${scrollProgress * 130}px,
          0
        )
        scale(${0.85 + scrollProgress * 0.45})
      `,
          }}
        />

        {/* Difuminado glass */}
        <div className="absolute inset-0 backdrop-blur-[12px]" />

        {/* El negro aparece solamente al final del recorrido */}
        <div
          className="absolute inset-0 bg-black will-change-[opacity]"
          style={{
            opacity: Math.min(Math.max((scrollProgress - 0.72) / 0.28, 0), 1),
          }}
        />

        {/* Oscurecimiento progresivo hacia abajo */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/25 to-black/90" />

        {/* Reflejo superior */}
        <div
          className="absolute inset-x-[10%] top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"
          style={{
            opacity: 0.25 + scrollProgress * 0.75,
          }}
        />
      </div>
      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div className="grid gap-14 pb-16 md:grid-cols-[1fr_auto] md:items-end">
          {/* Marca */}
          <div>
            <a
              href="#inicio"
              aria-label="Volver al inicio"
              className="inline-flex transition-opacity duration-300 hover:opacity-70"
            >
              <Image
                src="/logo-blanco.png"
                alt="Leonardo Web Services"
                width={130}
                height={100}
                className="h-auto w-24 object-contain md:w-28"
              />
            </a>

            <p className="mt-7 max-w-md text-sm leading-7 text-white/60 md:text-base">
              Diseño y desarrollo soluciones digitales que ayudan a marcas y
              negocios a crecer.
            </p>

            {/* Redes sociales */}
            <div className="mt-8 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/15 text-white/65 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white hover:text-black"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navegación */}
          <nav
            aria-label="Navegación del pie de página"
            className="grid grid-cols-2 gap-x-12 gap-y-5 sm:grid-cols-3 md:grid-cols-2"
          >
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/55 transition-colors duration-300 hover:text-white"
              >
                <span className="h-px w-0 bg-white transition-all duration-300 group-hover:w-4" />

                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Separador */}
        <div className="h-px bg-white/10" />

        {/* Cierre */}
        <div className="flex flex-col gap-5 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-white/30 sm:text-[10px]">
            © {new Date().getFullYear()} Leonardo Web Services
          </p>

          <a
            href="#inicio"
            className="group flex w-fit items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/35 transition-colors hover:text-white"
          >
            Volver arriba
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-white group-hover:text-black">
              ↑
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-[18px] w-[18px]"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-[17px] w-[17px]"
      aria-hidden="true"
    >
      <path d="M6.5 8.3H3.2V21h3.3V8.3ZM4.85 3A1.94 1.94 0 1 0 4.85 6.88 1.94 1.94 0 0 0 4.85 3ZM21 13.72c0-3.82-2.04-5.6-4.77-5.6a4.12 4.12 0 0 0-3.74 2.06V8.3H9.2V21h3.29v-6.29c0-1.66.31-3.27 2.37-3.27 2.03 0 2.06 1.9 2.06 3.38V21H21v-7.28Z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-[18px] w-[18px]"
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49v-1.91c-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.11 2.91.85.09-.67.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.93a9.3 9.3 0 0 1 2.5.35c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.04.36.32.68.95.68 1.92v2.8c0 .27.18.59.69.49A10.23 10.23 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}
