import Image from "next/image";
import Logo from "@/components/ui/logo";
import AuthBg from "@/public/images/auth-bg.svg";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="absolute z-30 w-full">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between md:h-20">
            {/* Site branding */}
            <div className="mr-4 shrink-0">
              <Logo />
            </div>
            <img className="w-full h-full" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiSlZIsMCgXQnMj__okfieSGw3-vWb8aEyfX8uFipPl2CEXRxSBGJlNToXWh4gFBmDNL44qsPOdaZA7tXvFletcKAxZUkVArM1HRSkrHjx6JOA3-5N6Zbf-T_P18KWVMuKWiqf8NMihLzb-YFgThdiyH30UZXkREEzalD4gMnDdiZOrDFKJ8EEChd5ij7I/s1600/Home.png">
            </img>
          </div>
        </div>   
      </header>      
    </>
  );
}
