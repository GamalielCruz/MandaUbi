"use client";

import Logo from "@/components/ui/logo";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const islands = [
  {
    name: 'Isla Coral',
    image: '/images/isla-coral.png',
    description: 'Ideal para XV años, evetos de empresa y más. Conoce más de Isla Coral.',
    link: '/isla/0'
  },
  {
    name: 'Isla del Sol',
    image: '/images/avatar-01.png',
    description: 'Descripción de Isla del Sol',
    link: '/isla-del-sol'
  },
  {
    name: 'Isla Esmeralda',
    image: '/images/avatar-02.jpg',
    description: 'Descripción de Isla Esmeralda',
    link: '/isla-esmeralda'
  }
];

export default function ProgressSlider() {
  const [selectedIsland, setSelectedIsland] = useState(islands[0]);

  return (
    <>
      <header className="relative w-full">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between md:h-20">
            <div className="mr-4 shrink-0">
              <Logo />
            </div>
          </div>
        </div>
      </header>

      <div className="inline-flex rounded-md shadow-sm place-content-center" role="group">
        {islands.map((island, index) => (
          <button
            key={index}
            type="button"
            className={`px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 ${
              index === 0 ? 'rounded-s-lg' : index === islands.length - 1 ? 'rounded-e-lg' : ''
            } hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white`}
            onClick={() => setSelectedIsland(island)}
          >
            {island.name}
          </button>
        ))}
      </div>

      <div className="mt-4 p-4 border rounded-lg shadow-lg place-items-center">
        <h2 className="text-3xl mb-2 font-serif">{selectedIsland.name}</h2>
        <Image src={selectedIsland.image} alt={selectedIsland.name} width={200} height={300} className="mb-4" priority />
        <p className="mb-4">{selectedIsland.description}</p>
        <Link href={selectedIsland.link} className="px-4 py-2 text-sky-50 bg-stone-800 rounded-lg shadow-xl  hover:bg-blue-700">
          Pantalla Completa
        </Link>
      </div>
    </>
  );
}
