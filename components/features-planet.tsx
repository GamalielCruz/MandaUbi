import Image from "next/image";
import PlanetImg from "@/public/images/planet.png";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";
import PlanetTagImg01 from "@/public/images/planet-tag-01.png";
import PlanetTagImg02 from "@/public/images/planet-tag-02.png";
import PlanetTagImg03 from "@/public/images/planet-tag-03.png";
import PlanetTagImg04 from "@/public/images/planet-tag-04.png";

export default function FeaturesPlanet() {
  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
      <div className="mx-auto ">
      <h1
              className="pt-10 font-serif  md:text-5xl  text-white text-center"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Todo tipo de evento.
              
            </h1>
        <div className="">
          {/* Section header */}
          <div className="mx-auto max-w-3xl">
          <img className="" data-aos="zoom-y-out"
              data-aos-delay={150} alt="" data-original-height="425" data-original-width="640" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDkow4r54A9BJRFTRdNlwq5WqO1cp3mbLeu7sgOBxeljvTNsY1ydsoSHSjS2Q5Pp5g_Z9E1t2IzsborifFc18S9r8zd-0BnTx8kjPrD84sP8PkZ2iaQHaJzH6OpxJh5YnkKtbgTEg9u5ax9G9Y6fCGa7lcXbISkh-wRKlo-eLqtjoC0V6Yu45NxTzC3YE/s1600/Green%20Graphic%20New%20Arrivals%20Website%20Homepage%20Banner%20%28900%20x%20425%20px%29.png"/>          
          </div>
        </div>
      </div>
    </section>
  );
}
