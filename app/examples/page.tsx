"use client";

import Logo from "@/components/ui/logo";
import Link from 'next/link';
import { useState } from 'react';

const islands = [
  {
    name: 'Isla Coral',
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiikaM5ooBiH9TPnFomTHKxKv4il5Ih70a-2d2jA5qySfqwAwp-Vadahy_6uSYEBBdOJxn880XQ1LG8-knJvdzsrsbUQicia52rmzzoEqktnaNJIK-HEIXal_WnjEWCzMJuLahJM1JZAKIY0GbtOsySWBmiTULnSqKRMBnE130GfgyK3_AiTYYX8VRS6Ww/s1600/Sin%20t%C3%ADtulo%20%28410%20x%20844%20px%29.png',
    description: 'Ideal para XV años, eventos de empresa y más.',
    link: '/isla/0'
  },
  {
    name: 'Isla del Sol',
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjW141G6jJAaCdGx3Z23xol4tDEfR2sZKa2Ly6-7qEdbBgd_BNtvMzFSPfGRAKvxfsyI6dQZ7MMvMGWweloLVOAN5CRjUH3YPxpULCoHeX6LRw1kD2PLP6bYET3ksq2JTgahnigw3kBWEmnk0X20jT3pTqbPBx35zWr7eP3uzM0qgPGS2v3ZeeoQKr4WlA/s1600/Sin%20t%C3%ADtulo%20%28410%20x%20844%20px%29%20%281%29.png',
    description: 'Perfecta para bodas, aniversarios y momentos únicos.',
    link: '/isla/1'
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
          <div className="flex h-16 items-center justify-between ">
            <div className="mr-4 shrink-0">
              <Logo />
            </div>
          </div>
        </div>
      </header>

      <div className="bg-stone-100">
      <h2 className=" border-y text-3xl font-bold text-gray-950 text-center [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.7),transparent)1] md:text-4xl">
            Modelos</h2>
      <div className="flex flex-col items-center justify-center min-w-min ">
        <div className="mt-4  border rounded-lg  text-center shadow-xl">
          <h2 className="text-3xl mb-2 font-serif ">{selectedIsland.name}</h2>
          <img
        src={selectedIsland.image}
        alt={selectedIsland.name}
        className="mb-4 w-48 h-auto mx-auto"
          />
          <p className="mb-4 font-mono p-4 text-center">{selectedIsland.description}</p>
            <Link href={selectedIsland.link} className="px-4 py-2 font-bold text-sky-950 bg-slate-200 rounded-3xl shadow-2xl border-2 border-sky-950 hover:bg-sky-50">
            Ampliar vista
            </Link>
        </div>

        <div className="inline-flex rounded-md shadow-sm mt-4" role="group">
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
      </div>
      </div>
    </>
  );
}
