import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function SignificadoResultados() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>¿Qué significan los niveles de riesgo?</CardTitle>
      </CardHeader>
      <CardContent className="text-sm space-y-3">
        <p><span className="font-bold text-green-600">🟢 Bajo:</span> Riesgo mínimo. No hay indicios graves según tus datos.</p>
        <p><span className="font-bold text-yellow-500">🟡 Moderado:</span> Algunos factores de alerta. Se recomienda monitoreo.</p>
        <p><span className="font-bold text-red-600">🔴 Alto:</span> Condiciones que podrían agravar tu caso. Acude a revisión médica.</p>
      </CardContent>
    </Card>
  );
}
