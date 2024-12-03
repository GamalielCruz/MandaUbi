import PageIllustration from "@/components/page-illustration";

export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <div
              className="mb-6 border-y [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]"
              data-aos="zoom-y-out"
            >
              <div className="-mx-0.5 flex justify-center -space-x-3">
                <img
                  className="box-content "
                  width={602}
                  height={202}
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgx4mR-Vocccz3XJ4axiC33Drf2PYlMDRckSB4IujjeiJbbGlg3JAHjMM780KtUScDcen8TnkVdJa7gxWp-yhvFiw2ihJqEfrM7w-4V5JqKjqGWWn33tWRznwseCL_hJ5g9en0NDFNVw_0AZ6BbMG7oStb-3lxp8hpEuco7oskPx5RGTgdS3V9sfxmQ2cY/s1600/Green%20Graphic%20New%20Arrivals%20Website%20Homepage%20Banner%20%28900%20x%20425%20px%29%20%281%29.png "
                />
                
              </div>
            </div>
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Todos los detalles para <br className="max-lg:hidden" />
              tu gran dia.
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Invitaciones digitales, diseñadas para comunicar a tus invitados de manera elegante y eficiente.
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-gradient-to-t from-indigo-200 to-indigo-300 bg-[length:100%_100%] bg-[bottom] text-black shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      Ver ejemplo
                    </span>
                  </a>
                  <a
                    className="btn w-full bg-white text-gray-800 shadow hover:bg-gray-50 sm:ml-4 sm:w-auto"
                    href="#0"
                  >
                    Precios
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div
            className="mx-auto max-w-5xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <div className="relative aspect-video rounded-xl bg-indigo-200 px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,theme(colors.slate.300/.8),transparent)1]">
              
            <h1
              className="mb-6 py-5 border-y text-4xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-4xl text-center text-black"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Más allá del papel.
            </h1>

            <div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:p-6 [&>*]:before:absolute [&>*]:before:bg-gray-800 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-gray-800 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] md:[&>*]:p-10">
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
              <img
                  className="box-content border-gray-50"
                  width={60}
                  height={60}
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgC5ZZHCj5iwJe0Ghbm0TtYMKEfrnRUan2ZA4FBcRq-dwMKfEzK6iVvyVi5L5EDK5Rb9qq-WDEugi9QrUt5rrFO0c82Tsl8pd6n3C2ykHphVsnlzsrZGPy9yW7MPQ20mUKBK3l6cLjB7zRejq_5bVr-IAXK0k8FTc5afFwAdOn02LY1QPNcJNESjdy3DgE/s1600/1%20%281%29.png"
                />   
                            
                <p className="text-black text-2xl">Ahorra y disfruta más</p>
              </h3>
              <p className="text-[15px] text-black">
              Una sola invitación, infinitas posibilidades.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
              <img
                  className="box-content border-gray-50"
                  width={60}
                  height={60}
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9Mqz-QahOpcObNdjO8yq6NRzOXkrZqQxRidQxhiyIRVuRbltiE5XPZN5dcrD0fsGwFjQ16djQKIPEzsNpqi7dcDdLruBLo2161lwQzpIXKzqvANxK1yK8u5BiNIjecKU5dQUxOOBThcNSvTDCqMS-OzrMlATcmUHoGAKWn0LwkWDCl-S8ACsqcAz0OEs/s1600/1%20%282%29.png"
                />   
                
                <p className="text-black text-2xl">Obra de arte</p>
              </h3>
              <p className="text-[15px] text-black">
              Nos apasiona crear diseños impecables, únicos y a medida para cada cliente.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
              <img
                  className="box-content border-gray-50"
                  width={70}
                  height={70}
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiuwPD1LRp7VV8xpp9TmgAnPpvBbT8eynm8yTqvoWxEQvhc5svzyBdRFHgVRI3D7sLDDCKAaBeOGQjy_VSWHukmhXQnSedQ90Iw7gGf2GMTdNQKVIUh_c2F5N6gTp9ojXjl9zyOIbR1LQ47mDl-S1Ftpn9SUmT9x4tN4gMWCSt9tl3LWqWozdbAuLxrLCs/s1600/1%20%283%29.png"
                />   
                <p className="text-black text-2xl">Entrega express</p>
              </h3>
              <p className="text-[15px] text-black">
              Tu invitación, lista en 72 horas como máximo.
                </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
              <img
                  className="box-content border-gray-50"
                  width={60}
                  height={60}
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_nJXazAWCa2ZPIEveaxClatGZW6ZvzzprHCWsEsJr-7dFs22G6FAj_WOm_6oy-Tyoy-fsOO31T0BZpTdXb8q4_ZY5UieoCKawMRNfmHbqKXhyphenhypheneoqa0R9vjV02i5eOwxVMPmQ6qwsf1fRYmQyoEm7QCobraQM0tYgOXUEGQONMfkbnZhSaFk6agbpXTs0/s1600/1%20%284%29.png"
                />   
                <p className="text-black text-2xl">Altamente funcionales</p>
              </h3>
              <p className="text-[15px] text-black">
              Incluye GPS, confirmación de asistencia y muchas herramientas más.
                </p>
            </article>
            <article>
            <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
              <img
                  className="box-content border-gray-50"
                  width={60}
                  height={60}
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHY9kB3UNN96dKk7ZgTburum1hSypBj-d_lEhK5I58EUj3atflovZoGo3CEkk9BvwibKI6_XH_rBexdn_zAHFFOOabQ4V4PScfWCxDrBU6jTfsWZKEcd7t5Mm3Aw3u_fcOJJtqJiJcn0hmJXBKGb2nmo7x3GeTGk8u33bmcn__AKElBcH8D7Rnur0Ltqc/s1600/1%20%285%29.png"
                />   
                <p className="text-black text-2xl">En todo evento</p>
              </h3>
              <p className="text-[15px] text-black">
              Desde un bautizo, XV, Fiestas Improvisadas, Bodas; Tenemos el diseño perfecto.
                </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
              <img
                  className="box-content border-gray-50"
                  width={60}
                  height={60}
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhKSQAV7Ei7lkLE00RtIJqSWIaUXtACSVruYcVmlrcCd3YJJzle6zMyILaunhyphenhyphen3zECFeFkfmC3BOWb9Yge0bJaadKE0AkNcY6UGcnRMCWzXNx2lFfoM-gYwNb-_b9qX2GFLGL1oSTbgt-SYGRNThgl-0CBIItEHPzA7WGLZjjegHgTJONDbZFs9a6mOpvY/s1600/1%20%287%29.png"
                />   
                <p className="text-black text-2xl">GerardoyMaria.com*</p>
              </h3>
              <p className="text-[15px] text-black">
              Para tu ocasión especial con el nombre que siempre soñaste. 
                </p>
            </article>
          </div>
           
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
