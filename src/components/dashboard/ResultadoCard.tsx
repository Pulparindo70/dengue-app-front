"use client";

import { usePrediccion } from "@/context/PrediccionContext";
import { HeartPulse } from "lucide-react";

export default function ResultadoCard() {
  const { resultado } = usePrediccion();

  const nivelRiesgo =
    resultado?.riesgo === 1
      ? "Alto riesgo"
      : resultado?.riesgo === 0
      ? "Bajo riesgo"
      : "Riesgo no determinado";

  const descripcion =
    resultado?.riesgo === 1
      ? "Tu evaluación indica un alto riesgo de defunción por dengue. Se recomienda atención médica urgente."
      : resultado?.riesgo === 0
      ? "Tu evaluación indica un bajo riesgo de complicaciones por dengue."
      : "Este resultado está basado en tu información clínica y demográfica proporcionada.";

  return (
    <div className="p-6 border rounded-xl shadow-sm bg-white dark:bg-muted w-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Resultado General</h2>
        <HeartPulse className="text-purple-600" />
      </div>

      <p className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
        {nivelRiesgo}
      </p>
      <p className="text-muted-foreground">{descripcion}</p>
    </div>
  );
}
