"use client";

import { ShieldCheck, AlertTriangle, Dna, Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const infos = [
  {
    icon: <Dna className="w-8 h-8 text-purple-600" />,
    title: "¿Qué es el dengue?",
    description:
      "El dengue es una enfermedad viral transmitida por mosquitos. Puede provocar desde fiebre leve hasta síntomas graves que requieren atención médica inmediata.",
  },
  {
    icon: <AlertTriangle className="w-8 h-8 text-yellow-600" />,
    title: "¿Qué síntomas debo vigilar?",
    description:
      "Fiebre alta, dolor detrás de los ojos, sarpullido, náuseas, sangrado y dolor muscular o articular son señales de alarma.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-green-600" />,
    title: "¿Cómo prevenirlo?",
    description:
      "Elimina criaderos de mosquitos, usa repelente, protege puertas y ventanas. La prevención es la mejor defensa.",
  },
  {
    icon: <Info className="w-8 h-8 text-blue-600" />,
    title: "¿Cómo ayuda esta app?",
    description:
      "Predice riesgos en segundos con tus síntomas y datos. Sin registros, sin espera. Una herramienta informativa que te orienta.",
  },
];

export default function LandingInfo() {
  return (
    <section className="px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Información Clave</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {infos.map((info, i) => (
          <Card key={i} className="p-6 shadow-md hover:shadow-lg transition-all">
            <CardContent>
              <div className="flex items-start gap-4">
                {info.icon}
                <div>
                  <h3 className="text-xl font-semibold mb-1">{info.title}</h3>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
