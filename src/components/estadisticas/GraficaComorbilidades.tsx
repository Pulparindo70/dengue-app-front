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
  diabetes: number;
  hipertension: number;
  embarazo: number;
  inmuno: number;
};

export default function GraficaComorbilidades({
  diabetes,
  hipertension,
  embarazo,
  inmuno,
}: Props) {
  const data = {
    labels: ["Diabetes", "Hipertensión", "Embarazo", "Inmunosupresión"],
    datasets: [
      {
        label: "Casos con comorbilidades",
        data: [diabetes, hipertension, embarazo, inmuno],
        backgroundColor: "#60a5fa",
      },
    ],
  };

  const options = {
    indexAxis: "y" as const,
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Comorbilidades</CardTitle>
      </CardHeader>
      <CardContent>
        <Bar data={data} options={options} />
      </CardContent>
    </Card>
  );
}
