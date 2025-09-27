"use client"
import { motion } from "framer-motion"
import Image from "next/image";
export default function Heropage() {
  return (
    <section id="home" className="w-screen h-screen mt-12 md:mt-0 flex items-center justify-center">
  <div className="mai_heropage w-[90%] md:w-[70%] flex flex-col md:flex-row gap-4 items-center justify-center">

    <div className="order-last md:order-none text-center md:text-left md:w-2/5 flex flex-col gap-4">
      <h3 className="text-2xl md:text-3xl font-bold">
        Cust Coding Solutions <span className="text-cyan-500">.</span>
      </h3>
      <p className="text-gray-500 text-xl md:text-2xl">
        Transformamos suas ideias em soluções digitais inovadoras, conectando o seu negócio ao futuro com tecnologia, segurança e inovação.
      </p>
    </div>

  
    <div className="w-2/5 h-full relative flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2, duration: 0.4, ease: "easeIn" } }}
        className="relative flex items-center justify-center"
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" } }}
          className="w-[228px] h-[228px] md:w-[328px] md:h-[328px] mix-blend-lighten relative"
        >
          <Image
            src={"/logoccs.svg"}
            priority
            quality={180}
            fill
            alt="logo cust coding solutions| logo ccs"
            className="object-contain"
          />
        </motion.div>

        <motion.svg
          className="w-[250px] h-[250px] md:w-[370px] md:h-[370px] absolute"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx={253}
            cy={253}
            r={250}
            stroke="#06b6d4"
            strokeWidth={4}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ originX: 0.5, originY: 0.5 }}
            animate={{
              rotate: [120, 360],
              strokeDasharray: ["15 120 25 25", "20 100 40 40", "10 200 15 15"] as unknown as string,
            }}
            transition={{
              rotate: {
                repeat: Infinity,
                duration: 20,
                ease: "linear",
                
              },
              strokeDasharray: {
                repeat: Infinity,
                duration: 10,
                ease: "easeIn",
              },
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  </div>
</section>

  );
}
