import { FaBullseye, FaEye, FaHeart } from "react-icons/fa";
import Image from "next/image";

export default function About() {
  const features = [
    "Criamos soluções digitais que impulsionam negócios com tecnologia, segurança e inovação.",
    "Transformamos desafios em oportunidades com tecnologia avançada e inovação contínua.",
    "Elevamos seu negócio ao próximo nível com softwares sob medida e segurança total.",
    "Soluções digitais com tecnologia, segurança e inovação para resultados reais e eficiência."
  ];

  const historyCards = [
    {
      icon: <FaBullseye size={30} className="text-fd-accent" />,
      title: "Missão",
      description: "Desenvolver soluções tecnológicas inovadoras e acessíveis que transformem positivamente a realidade das organizações e da sociedade moçambicana."
    },
    {
      icon: <FaEye size={30} className="text-fd-accent" />,
      title: "Visão",
      description: "Ser a principal referência em desenvolvimento de soluções tecnológicas em Moçambique e África Austral, reconhecida pela excelência, inovação e impacto positivo."
    },
    {
      icon: <FaHeart size={30} className="text-fd-accent" />,
      title: "Valores",
      description: "Inovação e criatividade; Ética e transparência; Excelência técnica; Compromisso com resultados; Responsabilidade social."
    }
  ];

  return (
    <section id="sobre" className="w-screen py-20 flex flex-col gap-20 items-center justify-center">

      {/* Parte 1: Por que nos escolher */}
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 w-[90%] md:w-[80%] lg:w-[70%]">
        {/* Texto */}
        <div className="md:w-1/2 flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-bold">Por que nos escolher?</h2>
          <p className="text-gray-600 text-md md:text-lg text-justify">
            Na Cust Coding Solutions, criamos soluções digitais que impulsionam negócios e abrem novas oportunidades com tecnologia avançada, segurança total e inovação contínua.
            Desenvolvemos softwares e sistemas sob medida para gerar resultados reais, aumentar a eficiência, proteger seu negócio e preparar sua empresa para o futuro.
          </p>
          <ul className="flex flex-col gap-4 text-justify  list-disc list-inside text-gray-700">
            {features.map((item, index) => (
              <li key={index} className="text-md md:text-lg">{item}</li>
            ))}
          </ul>
        </div>

        
        <div className="md:w-1/2 hidden md:block relative h-[500px]">
          <Image
            src="/assets/img/work.jpg"
            alt="Ilustração da Feature"
            className="rounded-xl shadow-lg object-cover"
            fill
            priority
          />
        </div>

      </div>

      {/* Parte 2: História & Valores */}
      <div className="flex flex-col gap-10 w-[90%] md:w-[80%] lg:w-[70%]">
        <h2 className="text-3xl md:text-4xl font-bold border-b pb-4">Nossa História & Valores</h2>
        <p className="text-gray-600 text-md md:text-lg">
          Fundada em 2025, a Cust Coding Solutions nasceu da paixão por inovação e tecnologia. Começamos como uma pequena equipe com uma visão clara: transformar o cenário tecnológico de Moçambique.
        </p>

        {/* Cards de História */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 pt-6">
          {historyCards.map((card, index) => (
            <div key={index} className="bg-fd-card border border-dashed rounded-2xl p-6 shadow-lg flex flex-col gap-4 items-start">
              <div className="mb-2">{card.icon}</div>
              <h3 className="font-bold text-justify text-xl">{card.title}</h3>
              <p className="text-gray-600 text-justify text-md md:text-lg">{card.description}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
