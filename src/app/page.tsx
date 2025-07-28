import AboutTheBot from "@/_components/AboutTheBot";
import BannerElements from "@/_components/BannerElements";

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col gap-y-20 overflow-x-hidden">

      { /* background desktop */ }
      <img src="elementos.png" alt="elementos" 
      className="absolute inset-0 z-0 contrast-90 brightness-35 hidden lg:block"/>

      { /* background celular */ }
      <img src="medoMobile.jpg" alt="medo" 
      className="absolute inset-0 z-0 top-[-6rem] contrast-90 brightness-35 block w-full lg:hidden"/>

      <BannerElements />
      <AboutTheBot />
    </div>
  );
}