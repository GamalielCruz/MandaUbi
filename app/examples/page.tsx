"use client";

import Logo from "@/components/ui/logo";
import Link from 'next/link';
import { useState } from 'react';

const islands = [
  {
    name: 'Coral',
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiikaM5ooBiH9TPnFomTHKxKv4il5Ih70a-2d2jA5qySfqwAwp-Vadahy_6uSYEBBdOJxn880XQ1LG8-knJvdzsrsbUQicia52rmzzoEqktnaNJIK-HEIXal_WnjEWCzMJuLahJM1JZAKIY0GbtOsySWBmiTULnSqKRMBnE130GfgyK3_AiTYYX8VRS6Ww/s1600/Sin%20t%C3%ADtulo%20%28410%20x%20844%20px%29.png',
    description: 'Ideal para XV años, eventos de empresa y más.',
    link: '/isla/0',
    icon: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg4W8Pdf72AJx9S_D6M7e5DVEeY2bPryY7XTsRJtFo4lofcUPNYtyuL5UDMakmtDAEM2_8p5Iq-_XHijSuVwKBg3MvRkB0eETdfTag-ST6o9Pk3-XtW5znVF8twFpqtXj0Yhyphenhyphen8yFLWYp6KT5i5J8mZd9aqknLA1WsT24bK6bLERUsL_RmOGT0T-Ss_WL-I/s1600/icons8-coral-48.png',
  },
  {
    name: 'Del Sol',
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjW141G6jJAaCdGx3Z23xol4tDEfR2sZKa2Ly6-7qEdbBgd_BNtvMzFSPfGRAKvxfsyI6dQZ7MMvMGWweloLVOAN5CRjUH3YPxpULCoHeX6LRw1kD2PLP6bYET3ksq2JTgahnigw3kBWEmnk0X20jT3pTqbPBx35zWr7eP3uzM0qgPGS2v3ZeeoQKr4WlA/s1600/Sin%20t%C3%ADtulo%20%28410%20x%20844%20px%29%20%281%29.png',
    description: 'Perfecta para bodas, aniversarios y momentos únicos.',
    link: '/isla/1',
    icon:  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjko9DMyofXZfZktf8IKjuLFRygksLhQVCYj4L2OSVRDQ5qlRvjLZdeZKiZceTYWfWKWrpfAVwQxmL4-s7kyJhq8KbU6rT62aAmJX7A94McBkUndnBpbo9dmB4veoL7fIuBmplXXWSz5JrjcjKhCBNL4XXmgfhOWStRYoBJSRWJYO2qsPS7i5sN-Neap_Q/s1600/icons8-sol-48.png',
  },
  {
    name: 'Esmeralda',
    image: '/images/avatar-02.jpg',
    description: 'Descripción de Isla Esmeralda',
    link: '/isla-esmeralda',
    icon: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhiORosb1T-NM48_aj4RUkJl9jMXb5rVQ5CKjVJg5f2U9gHEzdQrkeuQNvmp7TkH_ypHTDNy7GXjwaHi8-Pg3HEASjoXl65JAlNWWaDB550RS0xYd3KnnavuXiGjqjwI1h_jsz_F9Y0XV9LaKArBPD6ljWVKLkc2IExEZ2CCPo0BsitOShmgABpI5LAKgE/s1600/icons8-esmeralda-48.png',
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
          className={`m-1 px-4 py-4 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-md flex 
          } hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white`}
          onClick={() => setSelectedIsland(island)}
        >
          <div className="flex flex-col ">
          <img src={island.icon}
            className="inline-block w-7 h-7  "
          />
          </div>
          <div className="flex flex-col ">
          {island.name}
          </div>
          
        </button>
          ))}
        </div>
      </div>
      </div>
    </>
  );
}
