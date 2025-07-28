"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { usePrediccion } from "@/context/PrediccionContext";

ChartJS.register(ArcElement, Tooltip, Legend);

const GraficaDonut = () => {
  const { resultado } = usePrediccion();

  const riesgo = resultado?.riesgo;

  const data = {
    labels: ["Alto riesgo", "Bajo riesgo"],
    datasets: [
      {
        data: riesgo === 1 ? [1, 0] : [0, 1],
        backgroundColor: ["#ef4444", "#22c55e"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: "60%",
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  };

  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Distribución de Riesgo</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center">
        {riesgo !== null && riesgo !== undefined ? (
          <div className="w-52 md:w-72">
            <Doughnut data={data} options={options} />
          </div>
        ) : (
          <p className="text-muted-foreground text-sm">Sin datos para mostrar</p>
        )}
      </CardContent>
    </Card>
  );
};

export default GraficaDonut;
