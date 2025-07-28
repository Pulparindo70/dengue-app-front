import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LineaTiempoPlaceholder() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Línea Temporal de Casos</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-48 flex items-center justify-center text-muted-foreground">
          Aquí irá una gráfica de línea por fechas de síntomas.
        </div>
      </CardContent>
    </Card>
  );
}
