import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  entidad: string;
  totalCasos: number;
  totalMuertes: number;
  comorbilidades: {
    diabetes: number;
    hipertension: number;
    embarazo: number;
    inmuno: number;
  };
};

export default function ResumenInteligente({
  entidad,
  totalCasos,
  totalMuertes,
  comorbilidades,
}: Props) {
  const porcentaje = ((totalMuertes / totalCasos) * 100).toFixed(2);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Resumen de {entidad}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm leading-relaxed space-y-2">
        <p>
          En <strong>{entidad}</strong> se han registrado aproximadamente{" "}
          <strong>{totalCasos.toLocaleString()}</strong> casos de dengue, de los cuales{" "}
          <strong>{totalMuertes.toLocaleString()}</strong> han terminado en defunción.
        </p>
        <p>
          Esto representa una tasa de mortalidad del <strong>{porcentaje}%</strong>.
        </p>
        <p>
          Las comorbilidades más frecuentes son:
          <ul className="list-disc list-inside mt-1">
            <li>Diabetes: <strong>{comorbilidades.diabetes}</strong> casos</li>
            <li>Hipertensión: <strong>{comorbilidades.hipertension}</strong> casos</li>
            <li>Embarazo: <strong>{comorbilidades.embarazo}</strong> casos</li>
            <li>Inmunosupresión: <strong>{comorbilidades.inmuno}</strong> casos</li>
          </ul>
        </p>
      </CardContent>
    </Card>
  );
}
