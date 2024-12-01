import Image from "next/image";
import PlanetImg from "@/public/images/planet.png";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";
import PlanetTagImg01 from "@/public/images/planet-tag-01.png";
import PlanetTagImg02 from "@/public/images/planet-tag-02.png";
import PlanetTagImg03 from "@/public/images/planet-tag-03.png";
import PlanetTagImg04 from "@/public/images/planet-tag-04.png";

export default function FeaturesPlanet() {
  return (
    <section className="relative before:absolute before:inset-0 before:-z-20">
      <div className="mx-auto ">
      <h1     className="pt-11 font-serif m-3  text-4xl  text-black text-center"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Todo tipo de evento.
              
            </h1>
        <div className="">
          {/* Section header */}
          <div className="mx-auto max-w-2xl">
          <img className=" data-aos="zoom-y-out  items-center 
              data-aos-delay={150} alt=""  height="335" width="640" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQaeBP-qha6VP7DbKLADFfyk0gMXM6mKxzU3UUSyS6Z0TrngzQXgJnqxyXnn-gHseTPTYYCGLWpdOBXEo02-I2SmjvAuIke_dXbI0gpuIHNmjNwdcsRSnOZLqbAzgtcjIGavqSGLOEZ0_izU7C1YmCs97gI4SwTsL0U1xyt1BI2ndM8gTAhXaiatu1B6w/s1600/Green%20Graphic%20New%20Arrivals%20Website%20Homepage%20Banner%20%285%29.png"/>          
          </div>
        </div>
      </div>
    </section>
  );
}
