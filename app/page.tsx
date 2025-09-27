import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import Heropage from "./components/heropage";
import Services from "./components/service";
import About from "./components/sobre";
import ContactSection from "./components/contato"

export default function Home() {
  return (
    <main className="w-screen min-h-screen text-center flex flex-col justify-center items-center relative">
      <Header />
      <Heropage/>
      <Services/>
      <About/>
      <ContactSection/>
      <div className="absolute top-0 left-0 w-screen h-screen -z-10">
        <Image
          src="/background.svg"
          alt="background"
          fill
          className="object-cover"
          priority
        />
      </div>

      
      <Footer/>
    </main>
  );
}
