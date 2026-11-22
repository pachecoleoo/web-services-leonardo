const services = [
  {
    number: "01",
    title: "Sitios web",
    description:
      "Landing pages y sitios corporativos modernos, rápidos y adaptados a todos los dispositivos.",
    color: "#2896a4",
  },
  {
    number: "02",
    title: "Sistemas a medida",
    description:
      "Soluciones personalizadas para optimizar procesos, organizar información y mejorar la gestión.",
    color: "#d13439",
  },
  {
    number: "03",
    title: "Desarrollo integral",
    description:
      "Acompañamiento desde la idea inicial hasta el diseño, desarrollo, publicación y mantenimiento.",
    color: "#ea743c",
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="bg-[#f3f2ee] px-6 py-24 text-[#080808] md:px-10 md:py-32 lg:px-16 lg:py-40"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="flex items-start gap-4">
          <span className="text-xs font-black text-[#2896a4]">03</span>

          <p className="text-xs font-black uppercase tracking-[0.18em]">
            Servicios
          </p>
        </div>

        <div className="mt-14 grid items-end gap-10 lg:grid-cols-[1fr_0.55fr]">
          <h2 className="text-[18vw] font-black uppercase leading-[0.82] tracking-[-0.08em] sm:text-[14vw] lg:text-[135px]">
            ¿Qué
            <span className="block">
              hago<span className="text-[#ea743c]">?</span>
            </span>
          </h2>

          <p className="max-w-xl text-lg leading-relaxed text-black/60 md:text-xl">
            Desarrollo soluciones digitales a medida, desde una landing page
            hasta un sistema completo.
          </p>
        </div>

        <div className="mt-20 border-t border-black/15 lg:mt-28">
          {services.map((service) => (
            <article
              key={service.number}
              className="group relative grid gap-5 overflow-hidden border-b border-black/15 py-9 transition-all duration-300 lg:grid-cols-[90px_1fr_0.8fr_50px] lg:items-center lg:gap-10 lg:py-12"
            >
              <div
                className="absolute inset-0 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                style={{ backgroundColor: service.color }}
              />

              <span
                className="relative z-10 text-xs font-black transition-colors group-hover:text-white"
                style={{ color: service.color }}
              >
                {service.number}
              </span>

              <h3 className="relative z-10 text-3xl font-black tracking-[-0.045em] transition-colors group-hover:text-white md:text-4xl lg:text-5xl">
                {service.title}
              </h3>

              <p className="relative z-10 max-w-lg text-sm leading-relaxed text-black/55 transition-colors group-hover:text-white/80 md:text-base">
                {service.description}
              </p>

              <span
                className="relative z-10 hidden text-3xl transition-transform duration-300 group-hover:rotate-45 group-hover:text-white lg:block"
                aria-hidden="true"
              >
                ↘
              </span>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-end">
          <a
            href="#contacto"
            className="group flex items-center gap-10 rounded-full bg-[#080808] px-7 py-4 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:bg-[#2896a4]"
          >
            Consultar por un proyecto
            <span
              className="text-xl transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            >
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
