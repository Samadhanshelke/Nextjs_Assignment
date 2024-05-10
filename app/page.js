
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
export default function Home() {
  return (
    <main className="flex min-h-screen w-[1200px] flex-col items-center m-auto justify-between p-24">
           <Navbar/>
         <Hero/>
    </main>
  );
}
