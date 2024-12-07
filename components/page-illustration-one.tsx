import Image from "next/image";

import Stripes from "@/public/images/stripes.svg";

export default function PageIllustrationOne() {
  return (
    <>
    <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform"
        aria-hidden="true"
      >
        <img className=""
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjKSY4QYdX_zox_A4qovOtQ_RKQgcE-K6QINv0hOO_r6bzYabFcWnLa5jc9PJB66P_OUTQYczywwcURD6ZmYY7BEvYgxNBNEV_q40fqfordcvv1c1mU09B90iwjpVM-Yso7iHFmfg7ElKk7mLD0-oHfopxPoAtPUA6BuLs_Avt84heuE0dcUyU2OOjS3pQ/s1600/Dise%C3%B1o%20sin%20t%C3%ADtulo%20%286%29.png"
          width={768}
          
          
        />
      </div>
      {/* Circles */}
      <div
        className="pointer-events-none absolute -top-60 left-1/2 ml-[580px] -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="h-96 w-80 rounded-full bg-gradient-to-tr from-yellow-500 opacity-50 blur-[560px]" />
      </div>
      <div
        className="pointer-events-none absolute left-1/2 top-[20px] ml-[200px] -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="h-80 w-80 rounded-full bg-gradient-to-tr from-yellow-200 to-yellow-700 opacity-90 blur-[160px]" />
      </div>
      <div
        className="pointer-events-none absolute left-1/2 top-[40px] -ml-[300px] -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="h-80 w-80 rounded-full bg-gradient-to-tr from-yellow-600 to-yellow-200 opacity-90 blur-[160px]" />
      </div>

      
    </>
  );
}
