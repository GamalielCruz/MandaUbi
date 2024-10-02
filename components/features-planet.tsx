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
      <div className="mx-auto max-w-6xl">
      <h2
              className="pt-10 font-bold font-serif  md:text-4xl text-white text-center"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Todo tipo de evento
              
            </h2>
        <div className="">
          {/* Section header */}
          <div className="mx-auto max-w-3xl">
          <img className="" data-aos="zoom-y-out"
              data-aos-delay={150} alt="" data-original-height="425" data-original-width="640" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgVCyNGDf9t6qvW00RHGqCeidDywJ8CllSoxkz8cx00P7hZLKdftOQJ9jUS4GxtsclgvC_nPHweIAH_ROt4OTCR7kT4FeZjkj-Eyp0x6esu-KU0nnGd11nKAZ9c5EyQLRGOXcXro-yI2e1npba-OCUQZQckzeDaEWZ7a3MajEKezkzcbtvYixyUzvkInT0/s1600/Green%20Graphic%20New%20Arrivals%20Website%20Homepage%20Banner%20%284%29.png"/>          
          </div>
        </div>
      </div>
    </section>
  );
}
