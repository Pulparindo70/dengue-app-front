import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MapaCalorPlaceholder() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Mapa de Calor (prototipo)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64 flex items-center justify-center text-muted-foreground">
          Mapa interactivo próximamente...
        </div>
      </CardContent>
    </Card>
  );
}
