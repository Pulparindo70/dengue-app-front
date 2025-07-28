"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

type Props = {
  entidades: string[];
  muertes: number[];
};

export default function GraficaTopEntidades({ entidades, muertes }: Props) {
  const data = {
    labels: entidades,
    datasets: [
      {
        label: "Muertes por entidad",
        data: muertes,
        backgroundColor: "#34d399",
      },
    ],
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Entidades con más Muertes</CardTitle>
      </CardHeader>
      <CardContent>
        <Bar data={data} />
      </CardContent>
    </Card>
  );
}
