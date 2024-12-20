"use client";

import SilderImg01 from '@/public/images/avatar-01.png'
import SilderImg02 from '@/public/images/avatar-02.jpg'
import SilderImg03 from '@/public/images/avatar-03.jpg'
import SilderImg04 from '@/public/images/avatar-04.jpg'
import SilderIcon01 from '@/public/images/logo-01.svg'
import SilderIcon02 from '@/public/images/logo-02.svg'
import SilderIcon03 from '@/public/images/logo-03.svg'
import SilderIcon04 from '@/public/images/logo-04.svg'

import Logo from "@/components/ui/logo";
import Image from 'next/image';
import { useState } from 'react';


export default function ProgressSlider() {

  const items = [
    {
      img: SilderImg01,
      desc: 'XV Años',
      buttonIcon: SilderIcon01,
    },
    {
      img: SilderImg02,
      desc: 'Bodas',
      buttonIcon: SilderIcon02,
    },
    {
      img: SilderImg03,
      desc: 'Fiestas',
      buttonIcon: SilderIcon03,
    },
    {
      img: SilderImg04,
      desc: 'Baby Shower',
      buttonIcon: SilderIcon04,
  }
  ]; 

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
    <>
    <header className="absolute z-30 w-full">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between md:h-20">
            {/* Site branding */}
            <div className="mr-4 shrink-0">
              <Logo />
            </div>
          </div>
        </div>
      </header>

      <main className="">
        <div className='static mt-20'>
        <h2 className="mb-1 border-y text-2xl font-bold text-center text-sky-950 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.7),transparent)1] md:text-4xl">
            Modelos
        </h2>
        </div>

        <div className="max-w-xl mx-auto  ">
      <div className="w-full  mx-auto text-center ">
        {/* Slider container */}
        <div className="relative overflow-hidden ">
          <div className="flex transition-transform duration-200 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {items.map((item, index) => (
          <div key={index} className="flex-shrink-0 w-full">
            <Image className="" src={item.img} width={524} height={206} alt={item.desc} />
          </div>
        ))}
          </div>
        </div>
        {/* Clickable images */}
        <div className="absolute inset-0 flex items-center justify-center">
          {items.map((item, index) => (
            <a
              key={index}
              href={`/isla/${index}`}
              className={` w-full  ${currentIndex === index ? 'block' : 'hidden'}`}
            >
              <span className="sr-only">{item.desc}</span>
            </a>
          ))}
        </div>
        {/* Buttons */}
        <div className="max-w-xs sm:max-w-sm md:max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {items.map((item, index) => (
        <button
          key={index}
          className="p-2 rounded focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 group"
          onClick={() => setCurrentIndex(index)}
        >
          <span className="text-center flex flex-col items-center shadow-xl bg-gray-100 p-3">
            <span className="flex items-center justify-center relative w-9 h-9 rounded-full bg-gray-200 mb-2">
          <Image src={item.buttonIcon} alt={item.desc} />
            </span>
            <span className="block text-md font-medium text-slate-900 mb-2">{item.desc}</span>
            <span className="block relative w-full bg-slate-200 h-1 rounded-full" role="progressbar" aria-valuenow={currentIndex === index ? 100 : 0}>
          <span className="absolute inset-0 bg-gray-700 rounded-[inherit]" style={{ width: currentIndex === index ? '100%' : '0%' }}></span>
            </span>
          </span>
        </button>
          ))}
        </div>
      </div>
      </div>
      </main>
    </>
    </>
  );
}
