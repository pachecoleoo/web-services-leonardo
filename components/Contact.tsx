export default function Contact() {
  return (
    <section id="contacto" className="relative isolate overflow-hidden bg-[#2896a4] px-6 py-28 text-white sm:px-10 md:py-36 lg:px-16 lg:py-44">
      <div className="pointer-events-none absolute -right-32 -top-36 h-[400px] w-[400px] rounded-full border-[70px] border-[#ea743c]/70 sm:h-[580px] sm:w-[580px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-[#d13439]/30 blur-[75px]" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1500px]">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/35 pb-5 text-[11px] font-black uppercase tracking-[.2em]">
          <span>06 / Contacto</span><span>Tu próximo proyecto empieza acá ↗</span>
        </div>
        <h2 className="mt-16 max-w-[1240px] text-[clamp(3.5rem,11vw,11rem)] font-black uppercase leading-[.82] tracking-[-.08em]">Hagamos <span className="block text-[#080808]">algo grande<span className="text-[#ea743c]">.</span></span></h2>
        <div className="mt-12 grid gap-9 border-t border-white/30 pt-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <p className="max-w-xl text-lg leading-relaxed text-white/90 sm:text-xl">¿Tenés una idea, una marca o un negocio que quiere crecer? Contame qué necesitás y construyamos una solución que tenga sentido.</p>
          <a href="https://www.instagram.com/leonardowebservices/" target="_blank" rel="noopener noreferrer" className="group inline-flex min-h-14 items-center justify-between gap-10 rounded-full bg-[#080808] px-8 py-5 text-sm font-black uppercase tracking-[.08em] transition hover:-translate-y-1 hover:bg-white hover:text-[#080808]">
            Hablemos por Instagram <span className="text-xl transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="mt-24 grid gap-7 border-t border-white/30 pt-7 text-xs font-bold uppercase tracking-[.15em] sm:grid-cols-3">
          <p>Neuquén · Argentina</p><p className="text-white/75">Diseño · Desarrollo · Estrategia</p><p className="sm:text-right">Leonardo Web Services</p>
        </div>
      </div>
    </section>
  );
}
