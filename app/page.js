
import Hero from "./components/HeroN";
import Navbar from "./components/Navbar";
export default function Home() {
  return (
    <main className="flex min-h-screen sm:w-[1200px]  flex-col items-center m-auto justify-center">
          <Navbar/>
         <Hero/>
    </main>
  );
}
