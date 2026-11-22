export default function Hero() {
  return (
    <section id="inicio" className="relative isolate flex min-h-[100svh] flex-col justify-between overflow-hidden bg-[#080808] text-white">
      <video autoPlay muted loop playsInline preload="metadata" poster="/logo-negro.png" aria-hidden="true" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-35">
        <source src="/video/hero2.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/55 via-black/40 to-[#080808]" />
      <div className="pointer-events-none absolute -right-32 top-[18%] h-64 w-64 rounded-full border-[45px] border-[#2896a4]/50 blur-[1px] animate-float sm:h-[360px] sm:w-[360px] sm:border-[65px]" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-[14%] -left-20 h-44 w-44 rounded-full bg-[#d13439]/20 blur-[70px]" aria-hidden="true" />

      <div className="mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-center px-6 pb-20 pt-40 sm:px-10 lg:px-16 lg:pt-48">
        <div className="animate-reveal flex flex-wrap items-center gap-3">
          <span className="inline-block h-2 w-2 rounded-full bg-[#2896a4] shadow-[0_0_20px_#2896a4]" />
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/70 sm:text-xs">Diseño · Desarrollo · Estrategia digital</p>
        </div>
        <h1 className="animate-reveal-delay mt-9 max-w-[1250px] text-[clamp(3.5rem,10.5vw,10.5rem)] font-black uppercase leading-[.83] tracking-[-.075em]">
          Ideas que <span className="block text-[#2896a4]">se hacen</span>
          <span className="block">realidad<span className="text-[#ea743c]">.</span></span>
        </h1>
        <div className="mt-10 grid max-w-[1050px] gap-8 border-t border-white/20 pt-7 sm:grid-cols-[1fr_auto] sm:items-end">
          <p className="max-w-xl text-base leading-relaxed text-white/70 sm:text-xl">Creo experiencias digitales con identidad, estrategia y tecnología para marcas que quieren ir más allá.</p>
          <div className="flex flex-wrap gap-3">
            <a href="#proyectos" className="group inline-flex items-center gap-8 rounded-full bg-[#2896a4] px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#227f8b]">
              Explorar proyectos <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span>
            </a>
            <a href="#contacto" className="inline-flex items-center rounded-full border border-white/35 px-6 py-4 text-sm font-bold transition hover:border-white hover:bg-white hover:text-black">Hablemos</a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between border-t border-white/15 px-6 py-5 text-[10px] font-bold uppercase tracking-[.2em] text-white/45 sm:px-10 lg:px-16">
        <span>Leonardo Web Services © 2026</span>
        <a href="#sobre-mi" className="flex items-center gap-3 transition-colors hover:text-white">Deslizá para descubrir <span className="text-lg text-[#2896a4]" aria-hidden="true">↓</span></a>
      </div>
    </section>
  );
}
