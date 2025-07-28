import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Hospital, HeartPulse, Syringe, Skull } from "lucide-react";

type KpiResumenProps = {
  totalCasos: number;
  totalMuertes: number;
  conDiabetes: number;
  conHipertension: number;
};

export default function KpiResumen({
  totalCasos,
  totalMuertes,
  conDiabetes,
  conHipertension,
}: KpiResumenProps) {
  const kpis = [
    {
      title: "Total de Casos",
      value: totalCasos,
      icon: <Hospital className="h-6 w-6 text-blue-500" />,
    },
    {
      title: "Total de Muertes",
      value: totalMuertes,
      icon: <Skull className="h-6 w-6 text-red-500" />,
    },
    {
      title: "Con Diabetes",
      value: conDiabetes,
      icon: <Syringe className="h-6 w-6 text-orange-500" />,
    },
    {
      title: "Con Hipertensión",
      value: conHipertension,
      icon: <HeartPulse className="h-6 w-6 text-rose-500" />,
    },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
      {kpis.map((kpi, index) => (
        <Card key={index}>
          <CardHeader className="flex items-center justify-between">
            <CardTitle className="text-sm">{kpi.title}</CardTitle>
            {kpi.icon}
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{kpi.value.toLocaleString()}</p>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
