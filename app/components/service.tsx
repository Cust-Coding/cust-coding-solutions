"use client";
import { motion } from "framer-motion";
import { FaLaptopCode, FaRobot, FaPaintBrush, FaChartLine, FaLock, FaDatabase, FaTools } from "react-icons/fa";

export default function Services() {
  const cardServices = [
    {
      icon: <FaTools size={40} />,
      title: "Serviços Técnicos",
      description: "Suporte informático, eletricidade, instalação fotovoltaica e manutenção para residências e PMEs.",
      link: "#"
    },
    {
      icon: <FaLaptopCode size={40} />,
      title: "Desenvolvimento e Apps",
      description: "Sistemas personalizados, apps móveis e plataformas SaaS para otimizar processos empresariais.",
      link: "#"
    },
    {
      icon: <FaRobot size={40} />,
      title: "Inteligência Artificial e Automação",
      description: "Soluções de IA, automação de processos e chatbots para construção, saúde e educação.",
      link: "#"
    },
    {
      icon: <FaPaintBrush size={40} />,
      title: "Design e Web",
      description: "Web Design, UX/UI e Design Gráfico para experiências digitais e identidade visual forte.",
      link: "#"
    },
    {
      icon: <FaChartLine size={40} />,
      title: "Marketing Digital",
      description: "SEO, gestão de campanhas e estratégias digitais para aumentar visibilidade online.",
      link: "#"
    },
    {
      icon: <FaLock size={40} />,
      title: "Segurança",
      description: "Consultoria para identificar vulnerabilidades e implementar medidas de proteção em softwares e sistemas.",
      link: "#"
    },
    {
      icon: <FaDatabase size={40} />,
      title: "Análise de Dados e IA Avançada",
      description: "Análise de dados, criação de modelos de IA e soluções de visão computacional, aplicáveis a todos os serviços para gerar insights estratégicos.",
      link: "#"
    }
  ];


  const cardVariants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", bounce: 0.3, duration: 0.6 }
    }
  };

  return (
    <section id="servicos" className="w-screen min-h-screen  py-28 md:py-12 flex items-center justify-center">
      <div className="w-[90%] md:w-[80%] lg:w-[70%]">
        <h2 className="text-start text-2xl font-bold md:text-3xl border-b pb-4">Nossos Serviços:</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12 pb-14">
          {cardServices.map((service, index) => (
            <motion.div
              key={index}
              className="group flex justify-center gap-4"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ y: -10, boxShadow: "0 15px 25px rgba(0,0,0,0.2)" }}
            >
              <div className="rounded-2xl border border-dashed p-8 mt-10 w-full max-w-xs bg-fd-card relative min-h-[250px]">
                <div className="rounded-2xl h-20 w-20 -mt-22 mb-4 flex items-center justify-center bg-gray-700">
                  {service.icon}
                </div>

                <b className="font-bold text-xl">{service.title}</b>
                <p className="opacity-50 mt-2 text-pretty line-clamp-4">{service.description}</p>

                <a href={service.link} target="_blank" rel="noopener noreferrer" className="hidden">
                  {service.link}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
