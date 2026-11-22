import Image from "next/image";

const projects = [
  {
    number: "01",
    title: "360 Construcciones",
    category: "Diseño y desarrollo web",
    description:
      "Sitio corporativo para presentar los desarrollos inmobiliarios, obras y servicios de infraestructura de la empresa.",
    image: "",
    link: "#",
    background: "from-[#062a47] to-[#2896a4]",
  },
  {
    number: "02",
    title: "Anfitrión Café",
    category: "Identidad y experiencia digital",
    description:
      "Landing page para un servicio de café destinado a eventos, empresas y ocasiones especiales.",
    image: "",
    link: "#",
    background: "from-[#3a2419] to-[#c38b5f]",
  },
  {
    number: "03",
    title: "ACSA",
    category: "Plataforma corporativa",
    description:
      "Sitio institucional con publicación de búsquedas laborales y un sistema para recibir postulaciones.",
    image: "",
    link: "#",
    background: "from-[#4a1013] to-[#d13439]",
  },
];

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="bg-[#080808] px-6 py-24 text-white md:px-10 md:py-32 lg:px-16 lg:py-40"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="flex items-start gap-4">
          <span className="text-xs font-black text-[#2896a4]">02</span>

          <p className="text-xs font-black uppercase tracking-[0.18em]">
            Proyectos
          </p>
        </div>

        <h2 className="mt-12 max-w-5xl text-[14vw] font-black uppercase leading-[0.85] tracking-[-0.075em] sm:text-[11vw] lg:text-[100px]">
          Trabajo
          <span className="block">
            seleccionado<span className="text-[#2896a4]">.</span>
          </span>
        </h2>

        <div className="mt-20 md:mt-28">
          {projects.map((project) => (
            <article
              key={project.number}
              className="grid gap-8 border-t border-white/20 py-12 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16 lg:py-16"
            >
              <div
                className={`group relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${project.background}`}
              >
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`Captura del proyecto ${project.title}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 65vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center">
                    <span className="text-[24vw] font-black leading-none text-white/10 lg:text-[150px]">
                      {project.number}
                    </span>

                    <p className="mt-3 text-[10px] font-black uppercase tracking-[0.2em] text-white/65">
                      Captura del proyecto
                    </p>
                  </div>
                )}

                <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-[#ea743c] transition-transform duration-500 group-hover:scale-x-100" />
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-[#2896a4]">
                    {project.category}
                  </p>

                  <h3 className="mt-4 text-4xl font-black leading-none tracking-[-0.05em] md:text-5xl lg:text-6xl">
                    {project.title}
                  </h3>
                </div>

                <p className="my-8 max-w-lg text-sm leading-relaxed text-white/55 md:text-base">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  className="group flex items-center justify-between border-b border-white/30 pb-4 text-xs font-black uppercase tracking-[0.15em] transition-colors hover:border-[#ea743c] hover:text-[#ea743c]"
                >
                  Ver proyecto
                  <span
                    className="text-xl transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
