"use client"; // necessário se estiver usando Next.js App Router
import { useState, useRef, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import * as validator from "validator";
import Image from "next/image";

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

const cardServices = [
  { title: "Serviços Técnicos" },
  { title: "Desenvolvimento e Apps" },
  { title: "Inteligência Artificial e Automação" },
  { title: "Design e Web" },
  { title: "Marketing Digital" },
  { title: "Segurança" },
  { title: "Análise de Dados e IA Avançada" },
  { title: "Outros" },
];

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // sanitização leve
  const sanitizeForSend = (s: string) => s.trim().replace(/[\x00-\x1F\x7F]/g, "");

  const validate = (data: FormData) => {
    if (validator.isEmpty(data.name)) return "Nome é obrigatório.";
    if (!validator.isLength(data.name, { min: 2, max: 100 })) return "Nome inválido.";
    if (!validator.isEmail(data.email)) return "Email inválido.";
    if (validator.isEmpty(data.service)) return "Selecione um serviço.";
    if (!validator.isLength(data.message, { min: 5, max: 3000 })) return "Mensagem inválida.";
    return null;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const err = validate(formData);
    if (err) {
      setError(err);
      return;
    }

    const safeData: FormData = {
      name: sanitizeForSend(formData.name),
      email: sanitizeForSend(formData.email),
      company: sanitizeForSend(formData.company),
      service: sanitizeForSend(formData.service),
      message: sanitizeForSend(formData.message),
    };

    if (formRef.current) {
      // substitui valores no formRef
      Object.keys(safeData).forEach((key) => {
        const input = formRef.current?.[key as keyof HTMLFormElement] as
          | HTMLInputElement
          | HTMLTextAreaElement
          | HTMLSelectElement
          | undefined;
        if (input) input.value = safeData[key as keyof FormData];
      });

      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          formRef.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        )
        .then(
          () => {
            setSuccess("Mensagem enviada com sucesso!");
            setFormData({ name: "", email: "", company: "", service: "", message: "" });
          },
          (error) => {
            setError("Erro ao enviar: " + error.text);
          }
        );
    }
  };

  return (
    <section id="contato" className="flex flex-col md:flex-row items-center justify-center gap-8  py-28 md:py-12 px-4 w-screen">
      <div className="w-[90%] md:w-2/5 b shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6">Entre em Contato</h2>

        {error && <div className="mb-4 text-red-600">{error}</div>}
        {success && <div className="mb-4 text-green-600">{success}</div>}

        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Nome *"
            required
            value={formData.name}
            onChange={handleChange}
            className="p-3 border rounded-md"
          />
          <input
            type="email"
            name="email"
            placeholder="Email *"
            required
            value={formData.email}
            onChange={handleChange}
            className="p-3 border rounded-md"
          />
          <input
            type="text"
            name="company"
            placeholder="Empresa"
            value={formData.company}
            onChange={handleChange}
            className="p-3 border rounded-md"
          />

          <select
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className="p-3 border rounded-md  text-gray-500 focus:ring-2 "
            >
            <option value="">Selecione um serviço *</option>
            {cardServices.map((s, idx) => (
                <option key={idx} value={s.title}>
                {s.title}
                </option>
            ))}
        </select>


          <textarea
            name="message"
            rows={4}
            placeholder="Sua mensagem..."
            value={formData.message}
            onChange={handleChange}
            className="p-3 border rounded-md"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-700 transition"
          >
            Enviar
          </button>
        </form>
      </div>

     
        <div className="md:w-2/5 hidden md:block relative h-[500px]">
                  <Image
                    src="/assets/img/comtact.jpeg"
                    alt="Ilustração da Feature"
                    className="rounded-xl shadow-lg object-cover"
                    fill
                    priority
                  />
          </div>
    </section>
  );
}
