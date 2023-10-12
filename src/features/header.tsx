import NavBar from "../components/navbar";
import AutoCarousel from "./slider";

export default function HeaderSection() {
  const backgroundImageUrl = 'images/bg.png';

  return (
    <div className="w-full h-[350px] md:h-[500px] bg-cover bg-center pt-8" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
      <NavBar />
      {/* <h1 className="mt-44 font-semibold text-3xl text-center pr-1 text-white md:font-bold md:text-6xl 
      md:text-left md:pl-32 ">Discover Extraordinary <br /> Comfort in Hotels</h1> */}
      <AutoCarousel />
    </div>
  )
}