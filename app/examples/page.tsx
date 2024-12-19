import 'add-to-calendar-button';
import Link from "next/link";

import Logo from "@/components/ui/logo";


export default function Examples() {
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

      <main className="p-5">

        <div>
        <div className="px-4 py-12 md:px-12 md:py-20">
            <h2 className="mb-1 border-y text-2xl font-bold text-center text-gray-900 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.7),transparent)1] md:text-4xl">
            Modelos</h2>

            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
             
            <div className="relative px-1 py-2 sm:py-1 lg:px-1s">

  <div className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl" aria-hidden="true">
    <div className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr " ></div>
  </div>
  
  <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6  sm:gap-y-0 lg:max-w-3xl lg:grid-cols-2">
    <div className="rounded-3xl rounded-t-3xl bg-sky-100 p-8 ring-1 ring-gray-900/10 sm:mx-8   lg:mx-0 lg:rounded-bl-3xl ">
      <h3 id="tier-hobby" className="text-base/7 font-semibold text-sky-700">Coral</h3>
      
      
      <div className="p-5 flex justify-center ">
      <img
        className="w-40"  
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiikaM5ooBiH9TPnFomTHKxKv4il5Ih70a-2d2jA5qySfqwAwp-Vadahy_6uSYEBBdOJxn880XQ1LG8-knJvdzsrsbUQicia52rmzzoEqktnaNJIK-HEIXal_WnjEWCzMJuLahJM1JZAKIY0GbtOsySWBmiTULnSqKRMBnE130GfgyK3_AiTYYX8VRS6Ww/s1600/Sin%20t%C3%ADtulo%20%28410%20x%20844%20px%29.png"
        alt="islacoral"
      />
    </div>
    <p className="mt-6 text-base/7 text-gray-800">Ideal para XV años</p>
      <Link href="/islacoral" aria-describedby="tier-hobby" className="mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:mt-10">Ver completo</Link>
    </div>
  </div>
</div>

              
              
            </div>
         
          </div>
        </div>
        
      </main>
    </>
    </>
  );
}
