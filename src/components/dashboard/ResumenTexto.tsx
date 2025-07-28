"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { usePrediccion } from "@/context/PrediccionContext";

const ResumenTexto = () => {
  const { resultado } = usePrediccion();

  if (!resultado || resultado.riesgo === null) return null;

  const resumen =
    resultado.riesgo === 1
      ? "El paciente presenta un nivel **alto** de riesgo de defunción asociado a factores clínicos y demográficos. Se recomienda atención médica inmediata y vigilancia continua."
      : "El paciente presenta un nivel **bajo** de riesgo de defunción. Aun así, se recomienda mantenerse hidratado, evitar automedicarse y acudir a consulta si los síntomas empeoran.";

  return (
    <Card>
      <CardHeader>
        <CardTitle>Resumen del Análisis</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed text-sm md:text-base whitespace-pre-line">
          {resumen}
        </p>
      </CardContent>
    </Card>
  );
};

export default ResumenTexto;
