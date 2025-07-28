import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

type Props = {
  entidades: string[];
  muertes: number[];
};

export default function ComparadorEntidades({ entidades, muertes }: Props) {
  const data = {
    labels: entidades,
    datasets: [
      {
        label: "Muertes comparadas",
        data: muertes,
        backgroundColor: ["#60a5fa", "#f87171"],
      },
    ],
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Comparador de Entidades</CardTitle>
      </CardHeader>
      <CardContent>
        <Bar data={data} />
      </CardContent>
    </Card>
  );
}
