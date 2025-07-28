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
  labels: string[];
  valores: number[];
};

export default function GraficaBarrasMunicipios({ labels, valores }: Props) {
  const data = {
    labels,
    datasets: [
      {
        label: "Muertes por municipio",
        data: valores,
        backgroundColor: "#f87171",
      },
    ],
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Muertes por Municipio</CardTitle>
      </CardHeader>
      <CardContent>
        <Bar data={data} />
      </CardContent>
    </Card>
  );
}
