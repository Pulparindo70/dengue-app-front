"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, AlertTriangle, Stethoscope, Syringe } from "lucide-react";
import { usePrediccion } from "@/context/PrediccionContext";

const RecomendacionesCard = () => {
  const { resultado } = usePrediccion();

  if (!resultado || resultado.riesgo === null) return null;

  const recomendacionesAlto = [
    {
      icon: <Stethoscope className="text-red-500" />,
      titulo: "Buscar atención médica inmediata",
      descripcion:
        "Acudir a un centro de salud si presenta fiebre alta, sangrado o dolor abdominal intenso.",
    },
    {
      icon: <AlertTriangle className="text-yellow-500" />,
      titulo: "Evitar automedicarse",
      descripcion:
        "No tomar medicamentos sin prescripción médica, especialmente antiinflamatorios.",
    },
    {
      icon: <Syringe className="text-purple-500" />,
      titulo: "Monitoreo frecuente",
      descripcion:
        "Revisar signos vitales y síntomas al menos dos veces al día si es posible.",
    },
  ];

  const recomendacionesBajo = [
    {
      icon: <CheckCircle className="text-green-500" />,
      titulo: "Mantener hidratación constante",
      descripcion:
        "Beber agua en abundancia para evitar complicaciones por deshidratación.",
    },
    {
      icon: <AlertTriangle className="text-yellow-500" />,
      titulo: "Evitar automedicarse",
      descripcion:
        "Aunque el riesgo es bajo, no se deben tomar medicamentos sin supervisión médica.",
    },
    {
      icon: <Stethoscope className="text-blue-500" />,
      titulo: "Acudir a consulta si hay nuevos síntomas",
      descripcion:
        "Consultar a un médico si presenta fiebre persistente o debilidad.",
    },
  ];

  const recomendaciones = resultado.riesgo === 1 ? recomendacionesAlto : recomendacionesBajo;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recomendaciones Personalizadas</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {recomendaciones.map((rec, i) => (
          <div key={i} className="flex items-start gap-4">
            <div className="mt-1">{rec.icon}</div>
            <div>
              <p className="font-semibold">{rec.titulo}</p>
              <p className="text-sm text-muted-foreground">{rec.descripcion}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default RecomendacionesCard;
