export default function Contact() {
  return (
    <section
      id="contacto"
      className="relative flex min-h-[750px] items-center overflow-hidden bg-[#2896a4] px-6 py-24 text-white md:px-10 md:py-32 lg:px-16 lg:py-40"
    >
      <div
        aria-hidden="true"
        className="absolute -bottom-8 -left-5 whitespace-nowrap text-[25vw] font-black leading-none tracking-[-0.09em] text-white/[0.06]"
      >
        LEONARDO
      </div>

      <div className="absolute -right-36 -top-36 h-80 w-80 rounded-full border-[55px] border-[#ea743c] opacity-90" />

      <div className="absolute bottom-16 right-[10%] hidden h-16 w-16 rotate-45 bg-[#d13439] lg:block" />

      <div className="relative z-10 mx-auto w-full max-w-[1500px]">
        <p className="mb-8 text-xs font-black uppercase tracking-[0.2em] text-white/80">
          ¿Tenés un proyecto?
        </p>

        <h2 className="max-w-6xl text-[16vw] font-black uppercase leading-[0.82] tracking-[-0.08em] sm:text-[13vw] lg:text-[125px]">
          Hagamos algo
          <span className="block text-[#080808]">increíble.</span>
        </h2>

        <p className="mt-10 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">
          Contame tu idea y veamos cómo podemos transformarla en una experiencia
          digital clara, atractiva y funcional.
        </p>

        <div className="mt-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <a
            href="https://wa.me/549XXXXXXXXXX"
            target="_blank"
            rel="noreferrer"
            className="group flex w-full items-center justify-between gap-10 rounded-full bg-[#ea743c] px-7 py-4 text-sm font-black transition-all hover:-translate-y-1 hover:bg-[#d13439] sm:w-auto"
          >
            Escribime por WhatsApp
            <span
              className="text-xl transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              aria-hidden="true"
            >
              ↗
            </span>
          </a>

          <a
            href="mailto:TUEMAIL@gmail.com"
            className="border-b border-white/60 pb-2 text-sm font-black transition-colors hover:border-[#080808] hover:text-[#080808]"
          >
            TUEMAIL@gmail.com
          </a>
        </div>

        <div className="mt-20 grid max-w-3xl gap-8 border-t border-white/30 pt-8 sm:grid-cols-3">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.17em] text-white/60">
              Ubicación
            </p>

            <p className="mt-3 text-sm font-bold">Neuquén, Argentina</p>
          </div>

          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.17em] text-white/60">
              Instagram
            </p>

            <a
              href="https://instagram.com/TUUSUARIO"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block text-sm font-bold hover:text-[#080808]"
            >
              @TUUSUARIO
            </a>
          </div>

          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.17em] text-white/60">
              Disponibilidad
            </p>

            <div className="mt-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#ea743c]" />
              <p className="text-sm font-bold">Nuevos proyectos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
