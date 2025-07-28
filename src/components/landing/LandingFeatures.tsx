// src/components/landing/LandingFeatures.tsx
import { ShieldCheck, Clock, UserCheck } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-purple-600" />,
    title: "Evaluación Segura",
    description:
      "Tus datos no se almacenan. La predicción ocurre localmente y es inmediata.",
  },
  {
    icon: <Clock className="w-8 h-8 text-purple-600" />,
    title: "Rápido y Preciso",
    description:
      "Obtén una predicción en menos de 5 segundos basada en modelos de Machine Learning.",
  },
  {
    icon: <UserCheck className="w-8 h-8 text-purple-600" />,
    title: "Diseñado para Todos",
    description:
      "Interfaz amigable para cualquier persona. No necesitas conocimientos médicos.",
  },
];

export default function LandingFeatures() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-12">¿Por qué usar DengueApp?</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition"
          >
            <div className="mb-4">{f.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
            <p className="text-sm text-gray-600">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
