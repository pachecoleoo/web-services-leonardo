const steps = [
  {
    number: "01",
    title: "Escucho",
    description:
      "Conozco tu idea, los objetivos del proyecto y las necesidades de tu negocio.",
    color: "#2896a4",
  },
  {
    number: "02",
    title: "Planifico",
    description:
      "Definimos la mejor solución, la estructura y el camino que vamos a seguir.",
    color: "#d13439",
  },
  {
    number: "03",
    title: "Desarrollo",
    description:
      "Diseño y construyo la experiencia digital con foco en calidad y rendimiento.",
    color: "#2896a4",
  },
  {
    number: "04",
    title: "Entrego y acompaño",
    description:
      "Publicamos el proyecto y continúo acompañándote en su funcionamiento y evolución.",
    color: "#ea743c",
  },
];

export default function Process() {
  return (
    <section className="bg-[#080808] px-6 py-24 text-white md:px-10 md:py-32 lg:px-16 lg:py-40">
      <div className="mx-auto max-w-[1500px]">
        <div className="flex items-start gap-4">
          <span className="text-xs font-black text-[#2896a4]">04</span>

          <p className="text-xs font-black uppercase tracking-[0.18em]">
            Proceso
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_0.55fr] lg:items-end">
          <h2 className="text-[17vw] font-black uppercase leading-[0.82] tracking-[-0.08em] sm:text-[13vw] lg:text-[125px]">
            Así
            <span className="block">
              trabajo<span className="text-[#ea743c]">.</span>
            </span>
          </h2>

          <p className="max-w-xl text-lg leading-relaxed text-white/55 md:text-xl">
            Un proceso simple, claro y transparente para convertir una idea en
            un proyecto digital.
          </p>
        </div>

        <div className="mt-20 grid border-t border-white/20 md:grid-cols-2 lg:mt-28 lg:grid-cols-4">
          {steps.map((step) => (
            <article
              key={step.number}
              className="group relative min-h-[300px] overflow-hidden border-b border-white/20 p-7 md:border-r lg:min-h-[390px] lg:border-b-0"
            >
              <div
                className="absolute inset-x-0 bottom-0 h-1 transition-all duration-500 group-hover:h-full"
                style={{ backgroundColor: step.color }}
              />

              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <span
                    className="text-sm font-black transition-colors group-hover:text-white"
                    style={{ color: step.color }}
                  >
                    {step.number}
                  </span>

                  <span
                    className="h-2.5 w-2.5 transition-transform duration-300 group-hover:rotate-45 group-hover:bg-white"
                    style={{ backgroundColor: step.color }}
                  />
                </div>

                <div className="mt-auto pt-24">
                  <h3 className="text-2xl font-black tracking-[-0.035em] lg:text-3xl">
                    {step.title}
                  </h3>

                  <p className="mt-5 text-sm leading-relaxed text-white/50 transition-colors group-hover:text-white/80">
                    {step.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 flex items-center gap-4">
          <div className="h-[2px] w-12 bg-[#2896a4]" />
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/40">
            De la idea al lanzamiento
          </p>
        </div>
      </div>
    </section>
  );
}
