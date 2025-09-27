"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  const link = [
    { name: "Inicio", path: "#home" },
    { name: "Servicos", path: "#servicos" },
    { name: "Sobre", path: "#sobre" },
    { name: "Contato", path: "#contato" },
  ];

  // Detecta a seção ativa baseado no scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200; // offset para topo
      let current = "inicio";

      link.forEach(({ path }) => {
        const section = document.querySelector(path);
        if (section && section.offsetTop <= scrollPos) {
          current = path.replace("#", "");
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // checa no carregamento
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e, path) => {
    e.preventDefault();
    const section = document.querySelector(path);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Menu */}
      <nav className="flex items-center justify-center gap-2 lg:gap-5 max-sm:hidden">
        {link.map((linkItem, index) => (
          <a
            key={index}
            href={linkItem.path}
            onClick={(e) => handleClick(e, linkItem.path)}
            className={`${
              activeSection === linkItem.path.replace("#", "")
                ? "text-accent border-b-2 border-accent text-xl text-cyan-500"
                : ""
            }`}
          >
            {linkItem.name}
          </a>
        ))}
      </nav>

      {/* Mobile Hamburger */}
      <div className="flex items-center justify-center sm:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl focus:outline-none"
        >
          {isOpen ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden absolute top-25 bg-gray-700/90 w-[90%] text-gray-300 text-2xl font-bold rounded-2xl px-10 z-30 overflow-hidden flex flex-col items-center gap-4 transition-all duration-300 ${
          isOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        {link.map((linkItem, index) => (
          <a
            key={index}
            href={linkItem.path}
            onClick={(e) => handleClick(e, linkItem.path)}
            className={`${
              activeSection === linkItem.path.replace("#", "")
                ? "text-accent border-b-2 border-accent text-xl text-cyan-500"
                : ""
            }`}
          >
            {linkItem.name}
          </a>
        ))}
      </div>
    </>
  );
};

export default Nav;
