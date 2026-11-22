import Image from "next/image";

const projects = [
  {
    number: "01", title: "360 Construcciones", category: "Desarrollo web · Real estate",
    description: "Una experiencia corporativa bilingüe para mostrar arquitectura, desarrollos y visión de marca.",
    image: "", gradient: "from-[#062a47] via-[#104463] to-[#2896a4]", tag: "Sitio corporativo",
  },
  {
    number: "02", title: "Anfitrión Café", category: "Landing page · Experiencia de marca",
    description: "Una presencia digital que traduce el universo de una marca en una experiencia atractiva y cercana.",
    image: "", gradient: "from-[#302018] via-[#6c4630] to-[#c38b5f]", tag: "Brand experience",
  },
  {
    number: "03", title: "ACSA", category: "Web corporativa · Talento",
    description: "Comunicación de servicios y una experiencia de postulaciones pensada para conectar personas y oportunidades.",
    image: "", gradient: "from-[#401518] via-[#842c33] to-[#d13439]", tag: "Solución digital",
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="bg-[#090909] px-6 py-24 text-white sm:px-10 md:py-32 lg:px-16 lg:py-40">
      <div className="mx-auto max-w-[1500px]">
        <div className="flex flex-wrap items-center justify-between gap-5 border-b border-white/20 pb-5">
          <p className="flex items-center gap-4 text-xs font-black uppercase tracking-[.22em]"><span className="text-[#2896a4]">02 /</span> Trabajo seleccionado</p>
          <span className="text-[10px] uppercase tracking-[.18em] text-white/40">Proyectos con identidad</span>
        </div>
        <div className="grid gap-8 py-14 lg:grid-cols-[1.5fr_.5fr] lg:items-end">
          <h2 className="max-w-5xl text-[clamp(3.2rem,9vw,8.6rem)] font-black uppercase leading-[.87] tracking-[-.075em]">Ideas que <span className="text-[#2896a4]">dejan</span><br />huella<span className="text-[#ea743c]">.</span></h2>
          <p className="max-w-xs text-base leading-relaxed text-white/55 lg:pb-3">Cada proyecto es una oportunidad para hacer algo distinto, útil y memorable.</p>
        </div>
        <div className="grid gap-7 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article key={project.number} className={"group overflow-hidden border border-white/15 bg-[#131313] " + (index === 0 ? "lg:col-span-2" : "")}>
              <div className={"relative isolate overflow-hidden bg-gradient-to-br " + project.gradient + (index === 0 ? " aspect-[16/10] sm:aspect-[2.35/1]" : " aspect-[16/11]")}>
                {project.image ? (
                  <Image src={project.image} alt={"Vista del proyecto " + project.title} fill sizes={index === 0 ? "100vw" : "(max-width: 1024px) 100vw, 50vw"} className="object-cover transition duration-700 group-hover:scale-105" />
                ) : (
                  <>
                    <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full border-[55px] border-white/10 transition duration-700 group-hover:rotate-45 sm:h-96 sm:w-96" aria-hidden="true" />
                    <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-10">
                      <span className="w-fit rounded-full border border-white/30 bg-black/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[.18em] backdrop-blur-md">{project.tag}</span>
                      <span className="max-w-[90%] break-words text-[clamp(2.4rem,6vw,7rem)] font-black uppercase leading-[.85] tracking-[-.065em]">{project.title}</span>
                    </div>
                  </>
                )}
                <span className="absolute bottom-0 left-0 h-1 w-0 bg-[#ea743c] transition-[width] duration-700 group-hover:w-full" aria-hidden="true" />
              </div>
              <div className="grid gap-5 p-6 sm:p-9 lg:grid-cols-[1fr_.85fr] lg:gap-8">
                <div>
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-[.2em] text-[#2896a4]">{project.category}</p>
                  <h3 className="text-3xl font-black tracking-[-.05em] sm:text-4xl">{project.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-white/55 sm:text-base">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-7 text-xs text-white/40">Las capturas reales de los proyectos se incorporarán próximamente.</p>
      </div>
    </section>
  );
}
