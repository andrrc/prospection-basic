import { useState, FormEvent } from "react";
import { WHATSAPP_NUMBER } from "@/config/constants";

const products = [
  "A100 — Óleo de Amaciamento",
  "Aero D100 — Óleo Mineral Aviation",
  "Aero XPD 100 — Fórmula XPD",
  "Aero DM 15W50 — Multigrau Semi-Sintético",
  "Aero D120 — Alta Viscosidade",
  "Aero Hydraulic — Fluido Hidráulico",
  "Mais de um produto",
];

interface ContactFormProps {
  submitLabel?: string;
}

const ContactForm = ({ submitLabel = "Enviar Solicitação" }: ContactFormProps) => {
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [form, setForm] = useState<Record<string, string>>({
    name: "",
    company: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: false });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Validar campos obrigatórios
    const newErrors: Record<string, boolean> = {};
    if (!form.name.trim()) newErrors.name = true;
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) newErrors.email = true;
    if (!form.phone.trim()) newErrors.phone = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    // Montar a mensagem
    const lines = [
      "*Nova solicitação de cotação*",
      "",
      `*Nome:* ${form.name.trim()}`
    ];
    if (form.company.trim()) lines.push(`*Empresa:* ${form.company.trim()}`);
    lines.push(`*E-mail:* ${form.email.trim()}`);
    lines.push(`*Telefone:* ${form.phone.trim()}`);
    if (form.product) lines.push(`*Produto de interesse:* ${form.product}`);
    if (form.message.trim()) lines.push(`*Mensagem:* ${form.message.trim()}`);
    
    lines.push("");
    lines.push("_Enviado pelo site prospection.com.br_");

    const message = lines.join("\n");
    const encodedMessage = encodeURIComponent(message);
    
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, "_blank");
  };

  const getInputClass = (field: string) =>
    `w-full px-4 py-3 rounded border bg-light-gray text-foreground text-sm font-body focus:outline-none focus:ring-2 focus:ring-blue-main/50 focus:border-blue-main ${
      errors[field] ? "border-red-500" : "border-input"
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Nome completo *"
          className={getInputClass("name")}
        />
        <input
          name="company"
          value={form.company}
          onChange={handleChange}
          placeholder="Empresa / CNPJ"
          className={getInputClass("company")}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="E-mail *"
          className={getInputClass("email")}
        />
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Telefone / WhatsApp *"
          className={getInputClass("phone")}
        />
      </div>
      <select
        name="product"
        value={form.product}
        onChange={handleChange}
        className={getInputClass("product")}
      >
        <option value="">Produto de interesse</option>
        {products.map((p) => (
          <option key={p} value={p}>{p}</option>
        ))}
      </select>
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        rows={4}
        placeholder="Mensagem"
        className={`${getInputClass("message")} resize-none`}
      />
      <button
        type="submit"
        className="w-full bg-blue-main text-white font-body font-medium uppercase tracking-[0.08em] text-btn py-3.5 rounded transition-all duration-200 hover:bg-blue-dark"
      >
        {submitLabel}
      </button>
    </form>
  );
};

export default ContactForm;