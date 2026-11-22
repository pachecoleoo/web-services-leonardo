const technologies = [
  {
    name: "Next.js",
    category: "Framework",
    color: "#080808",
  },
  {
    name: "React",
    category: "Frontend",
    color: "#2896a4",
  },
  {
    name: "TypeScript",
    category: "Lenguaje",
    color: "#d13439",
  },
  {
    name: "JavaScript",
    category: "Lenguaje",
    color: "#ea743c",
  },
  {
    name: "Tailwind CSS",
    category: "Estilos",
    color: "#2896a4",
  },
  {
    name: "Node.js",
    category: "Backend",
    color: "#080808",
  },
  {
    name: "MongoDB",
    category: "Base de datos",
    color: "#d13439",
  },
  {
    name: "PostgreSQL",
    category: "Base de datos",
    color: "#ea743c",
  },
  {
    name: "Git",
    category: "Versionado",
    color: "#080808",
  },
  {
    name: "Vercel",
    category: "Deploy",
    color: "#2896a4",
  },
];

export default function Technologies() {
  return (
    <section className="bg-[#f3f2ee] px-6 py-24 text-[#080808] md:px-10 md:py-32 lg:px-16 lg:py-40">
      <div className="mx-auto max-w-[1500px]">
        <div className="flex items-start gap-4">
          <span className="text-xs font-black text-[#2896a4]">05</span>

          <p className="text-xs font-black uppercase tracking-[0.18em]">
            Tecnologías
          </p>
        </div>

        <div className="mt-14 grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <h2 className="max-w-3xl text-[13vw] font-black uppercase leading-[0.87] tracking-[-0.075em] sm:text-[10vw] lg:text-[82px]">
              Herramientas para crear soluciones que{" "}
              <span className="text-[#ea743c]">funcionan.</span>
            </h2>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-black/55 md:text-lg">
              Selecciono las tecnologías adecuadas de acuerdo con las
              necesidades, características y objetivos de cada proyecto.
            </p>

            <div className="mt-12 flex items-center gap-4">
              <div className="h-[2px] w-12 bg-[#2896a4]" />

              <p className="text-xs font-black uppercase tracking-[0.16em]">
                Tecnología con propósito
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 border-l border-t border-black/15">
            {technologies.map((technology, index) => (
              <article
                key={technology.name}
                className="group relative min-h-32 overflow-hidden border-b border-r border-black/15 p-5 sm:min-h-40 sm:p-7"
              >
                <div
                  className="absolute inset-0 origin-bottom scale-y-0 transition-transform duration-500 group-hover:scale-y-100"
                  style={{ backgroundColor: technology.color }}
                />

                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <span className="text-[10px] font-black text-black/35 transition-colors group-hover:text-white/60">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className="h-2.5 w-2.5 transition-transform duration-300 group-hover:rotate-45 group-hover:bg-white"
                      style={{ backgroundColor: technology.color }}
                    />
                  </div>

                  <div className="mt-10">
                    <h3 className="text-lg font-black tracking-tight transition-colors group-hover:text-white sm:text-2xl">
                      {technology.name}
                    </h3>

                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.13em] text-black/40 transition-colors group-hover:text-white/65">
                      {technology.category}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
