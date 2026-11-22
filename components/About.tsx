const qualities = [
  {
    number: "01",
    title: "Diseño",
    description:
      "Experiencias claras, atractivas y coherentes con la identidad de cada marca.",
    color: "#2896a4",
  },
  {
    number: "02",
    title: "Desarrollo",
    description:
      "Tecnología moderna, buen rendimiento y adaptación a todos los dispositivos.",
    color: "#d13439",
  },
  {
    number: "03",
    title: "Estrategia",
    description:
      "Soluciones pensadas para resolver necesidades y alcanzar objetivos reales.",
    color: "#ea743c",
  },
];

export default function About() {
  return (
    <section
      id="sobre-mi"
      className="bg-[#f3f2ee] px-6 py-24 text-[#080808] md:px-10 md:py-32 lg:px-16 lg:py-40"
    >
      <div className="mx-auto grid max-w-[1500px] gap-16 lg:grid-cols-[180px_1fr] lg:gap-20">
        <div className="flex items-start gap-4">
          <span className="text-xs font-black text-[#2896a4]">01</span>

          <p className="text-xs font-black uppercase tracking-[0.18em]">
            Sobre mí
          </p>
        </div>

        <div>
          <p className="mb-2 text-lg font-bold md:text-xl">Hola, soy</p>

          <h2 className="text-[20vw] font-black leading-[0.82] tracking-[-0.08em] sm:text-[17vw] lg:text-[145px]">
            Leonardo<span className="text-[#ea743c]">.</span>
          </h2>

          <p className="mt-12 max-w-5xl text-2xl font-semibold leading-[1.15] tracking-[-0.035em] sm:text-3xl md:text-4xl lg:text-5xl">
            Diseño y desarrollo soluciones digitales que combinan{" "}
            <span className="text-[#2896a4]">estrategia</span>, identidad y{" "}
            <span className="text-[#d13439]">tecnología</span>.
          </p>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-black/60 md:text-lg">
            Mi objetivo es crear sitios y sistemas que no solo se vean bien,
            sino que también sean claros, funcionales y ayuden a potenciar cada
            proyecto.
          </p>

          <div className="mt-20 grid border-t border-black/15 md:grid-cols-3">
            {qualities.map((quality) => (
              <article
                key={quality.number}
                className="group border-b border-black/15 py-8 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0"
              >
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs font-black"
                    style={{ color: quality.color }}
                  >
                    {quality.number}
                  </span>

                  <span
                    className="h-2.5 w-2.5 transition-transform duration-300 group-hover:rotate-45 group-hover:scale-125"
                    style={{ backgroundColor: quality.color }}
                  />
                </div>

                <h3 className="mt-12 text-2xl font-black tracking-tight">
                  {quality.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-black/55">
                  {quality.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
