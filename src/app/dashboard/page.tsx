import ResultadoCard from "@/components/dashboard/ResultadoCard";
import SemaforoRiesgo from "@/components/dashboard/SemaforoRiesgo";
import ResumenTexto from "@/components/dashboard/ResumenTexto";
import RecomendacionesCard from "@/components/dashboard/RecomendacionesCard";
import GraficaDonut from "@/components/dashboard/GraficaDonut";

import FormularioLateral from "@/components/dashboard/FormularioLateral";

export default function DashboardPage() {
  return (
    <div className="container py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <ResultadoCard />
        <SemaforoRiesgo />
        <ResumenTexto />
        <RecomendacionesCard />
        <GraficaDonut />

      </div>
      <div>
        <FormularioLateral />
      </div>
    </div>
  );
}
