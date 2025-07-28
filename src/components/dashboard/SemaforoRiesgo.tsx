"use client";

import { usePrediccion } from "@/context/PrediccionContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SemaforoRiesgo() {
  const { resultado } = usePrediccion();

  const riesgo = resultado?.riesgo;

  const color = riesgo === 1 ? "bg-red-600" : riesgo === 0 ? "bg-green-500" : "bg-gray-300";
  const etiqueta = riesgo === 1 ? "Alto riesgo" : riesgo === 0 ? "Bajo riesgo" : "No determinado";

  return (
    <Card>
      <CardHeader>
        <CardTitle>Semáforo de Riesgo</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-2">
        <div className={`w-16 h-16 rounded-full ${color} border-4 border-gray-200`} />
        <p className="text-sm font-medium">{etiqueta}</p>
      </CardContent>
    </Card>
  );
}
