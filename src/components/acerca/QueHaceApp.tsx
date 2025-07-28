import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function QueHaceApp() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>¿Qué hace esta app?</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 text-sm leading-relaxed">
        <p>
          Nuestra app utiliza inteligencia artificial y datos clínicos reales para estimar el riesgo de complicaciones o defunción por dengue.
        </p>
        <p>
          Simplemente debes responder algunas preguntas sobre síntomas, edad, género y condiciones de salud previas.
        </p>
        <p>
          Al instante obtendrás un nivel de riesgo y recomendaciones visuales.
        </p>
      </CardContent>
    </Card>
  );
}
