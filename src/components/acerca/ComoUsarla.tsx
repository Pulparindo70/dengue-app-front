import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BadgeCheck, FileText, ActivitySquare } from "lucide-react";

export default function ComoUsarla() {
  const pasos = [
    {
      icon: <FileText className="w-6 h-6" />,
      titulo: "Paso 1: Llena el formulario",
      desc: "Proporciona tus datos clínicos como edad, sexo, y condiciones como diabetes o hipertensión.",
    },
    {
      icon: <ActivitySquare className="w-6 h-6" />,
      titulo: "Paso 2: Revisa tu predicción",
      desc: "Obtendrás un resultado con nivel de riesgo y visualizaciones que lo explican.",
    },
    {
      icon: <BadgeCheck className="w-6 h-6" />,
      titulo: "Paso 3: Consulta las recomendaciones",
      desc: "Verás consejos útiles y podrás modificar tus respuestas si lo deseas.",
    },
  ];

  return (
    <section className="grid md:grid-cols-3 gap-4">
      {pasos.map((paso, i) => (
        <Card key={i}>
          <CardHeader className="flex flex-row items-center gap-2">
            {paso.icon}
            <CardTitle className="text-base">{paso.titulo}</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            {paso.desc}
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
