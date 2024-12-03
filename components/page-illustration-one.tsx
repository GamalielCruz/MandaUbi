import Image from "next/image";

import Stripes from "@/public/images/stripes.svg";

export default function PageIllustrationOne() {
  return (
    <>
      {/* Circles */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 ml-[580px] -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="h-96 w-80 rounded-full bg-gradient-to-tr from-green-600 opacity-50 blur-[560px]" />
      </div>
      <div
        className="pointer-events-none absolute left-1/2 top-[220px] ml-[380px] -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="h-80 w-80 rounded-full bg-gradient-to-tr from-green-800 to-green-400 opacity-50 blur-[160px]" />
      </div>
      <div
        className="pointer-events-none absolute left-1/2 top-[40px] -ml-[300px] -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="h-80 w-80 rounded-full bg-gradient-to-tr from-green-800 to-green-400 opacity-50 blur-[160px]" />
      </div>

      
    </>
  );
}
