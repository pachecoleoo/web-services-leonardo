export default function Hero() {
  // Dejalo vacío para conservar el fondo negro.
  // Para usar un video: "/videos/hero.mp4"
  const backgroundVideo = "/video/hero2.mp4";

  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-black px-6 pb-20 pt-28 text-white sm:px-8 md:px-12 lg:px-16 xl:px-20"
    >
      {/* Video de fondo opcional */}
      {backgroundVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      )}

      {/* Capa oscura para el video */}

      {/* Círculo rojo */}
      <div
        className="
          absolute
          -right-32 top-[10%]
          h-[220px] w-[220px]
          rounded-full bg-[#d13439]
          opacity-90
          sm:-right-28 sm:h-[230px] sm:w-[230px]
          md:-right-32 md:top-[8%] md:h-[300px] md:w-[300px]
          lg:-right-24 lg:h-[360px] lg:w-[360px]
        "
        aria-hidden="true"
      />

      {/* Anillo celeste */}
      <div
        className="
          absolute
          -bottom-40 right-[-130px]
          h-[310px] w-[310px]
          rounded-full border-[52px] border-[#2896a4]
          opacity-80
          sm:-bottom-44 sm:right-[-70px]
          sm:h-[380px] sm:w-[380px] sm:border-[64px]
          md:-bottom-52 md:right-[4%]
          md:h-[470px] md:w-[470px] md:border-[76px]
          lg:-bottom-60 lg:right-[8%]
          lg:h-[520px] lg:w-[520px] lg:border-[82px]
        "
        aria-hidden="true"
      />

      {/* Contenido principal */}
      <div className="relative mt-30 z-10 mx-auto w-full max-w-[1440px]">
        <div className="max-w-5xl">
          <h1 className="max-w-3xl text-[12vw] font-black uppercase leading-[0.88] tracking-[-0.065em] sm:text-[10vw] md:text-[8vw] lg:text-[6.8vw] xl:text-[70px]">
            Ideas +
            <br />
            tecnología.
            <span className="mt-2 block text-[#ea3c3c]">
              Resultados reales.
            </span>
          </h1>

          <p className="mt-8 max-w-lg text-sm leading-6 text-white/60 sm:text-base sm:leading-7 md:mt-10 md:text-lg">
            Transformo ideas en experiencias digitales que ayudan a marcas y
            negocios a crecer.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row md:mt-10">
            <a
              href="#proyectos"
              className="group flex items-center justify-center gap-6 rounded-full bg-[#2896a4] px-7 py-3.5 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 hover:bg-[#227f8b] sm:justify-between"
            >
              Ver proyectos
              <span
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </a>

            <a
              href="#contacto"
              className="flex items-center justify-center rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold transition duration-300 hover:border-white/60 hover:bg-white hover:text-black"
            >
              Contame tu idea
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
