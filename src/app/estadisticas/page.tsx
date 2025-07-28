"use client";

import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import KpiResumen from "@/components/estadisticas/KpiResumen";
import GraficaBarrasMunicipios from "@/components/estadisticas/GraficaBarrasMunicipios";
import GraficaComorbilidades from "@/components/estadisticas/GraficaComorbilidades";
import GraficaTopEntidades from "@/components/estadisticas/GraficaTopEntidades";
import ResumenInteligente from "@/components/estadisticas/ResumenInteligente";
import TablaMunicipios from "@/components/estadisticas/TablaMunicipios";
import MapaCalorPlaceholder from "@/components/estadisticas/MapaCalorPlaceholder";
import LineaTiempoPlaceholder from "@/components/estadisticas/LineaTiempoPlaceholder";
import ComparadorEntidades from "@/components/estadisticas/ComparadorEntidades";

export default function EstadisticasPage() {
  const [entidad, setEntidad] = useState("YUCATÁN");

  // Datos simulados para Yucatán
  const resumen = {
    totalCasos: 5421,
    totalMuertes: 123,
    conDiabetes: 432,
    conHipertension: 511,
    embarazo: 68,
    inmuno: 37,
  };

  const municipios = {
    labels: ["Mérida", "Valladolid", "Progreso", "Ticul", "Tizimín"],
    valores: [56, 21, 18, 15, 13],
    tabla: [
      { nombre: "Mérida", casos: 1200, muertes: 56 },
      { nombre: "Valladolid", casos: 540, muertes: 21 },
      { nombre: "Progreso", casos: 480, muertes: 18 },
      { nombre: "Ticul", casos: 370, muertes: 15 },
      { nombre: "Tizimín", casos: 410, muertes: 13 },
    ],
  };

  const topEntidades = {
    entidades: ["Veracruz", "Chiapas", "Yucatán", "Oaxaca", "Jalisco"],
    muertes: [122, 110, 98, 86, 75],
  };

  const comparador = {
    entidades: ["Yucatán", "Veracruz"],
    muertes: [123, 122],
  };

  return (
    <main className="max-w-6xl mx-auto py-10 px-4 space-y-10">
      <div className="text-center space-y-1">
        <h1 className="text-3xl font-bold">Estadísticas del Dengue</h1>
        <p className="text-muted-foreground">
          Visualiza datos históricos por entidad, municipio y comorbilidades.
        </p>
      </div>

      {/* Selector de entidad */}
      <div className="max-w-xs mx-auto">
        <Select onValueChange={setEntidad} defaultValue={entidad}>
          <SelectTrigger>
            <SelectValue placeholder="Selecciona una entidad" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="YUCATÁN">Yucatán</SelectItem>
            <SelectItem value="VERACRUZ">Veracruz</SelectItem>
            <SelectItem value="CHIAPAS">Chiapas</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* KPIs */}
      <KpiResumen
        totalCasos={resumen.totalCasos}
        totalMuertes={resumen.totalMuertes}
        conDiabetes={resumen.conDiabetes}
        conHipertension={resumen.conHipertension}
      />

      {/* Resumen textual */}
      <ResumenInteligente
        entidad={entidad}
        totalCasos={resumen.totalCasos}
        totalMuertes={resumen.totalMuertes}
        comorbilidades={{
          diabetes: resumen.conDiabetes,
          hipertension: resumen.conHipertension,
          embarazo: resumen.embarazo,
          inmuno: resumen.inmuno,
        }}
      />

      {/* Gráficas */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <GraficaBarrasMunicipios
          labels={municipios.labels}
          valores={municipios.valores}
        />
        <GraficaComorbilidades
          diabetes={resumen.conDiabetes}
          hipertension={resumen.conHipertension}
          embarazo={resumen.embarazo}
          inmuno={resumen.inmuno}
        />
        <GraficaTopEntidades
          entidades={topEntidades.entidades}
          muertes={topEntidades.muertes}
        />
        <ComparadorEntidades
          entidades={comparador.entidades}
          muertes={comparador.muertes}
        />
      </section>

      {/* Visualizaciones futuras */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MapaCalorPlaceholder />
        <LineaTiempoPlaceholder />
      </section>

      {/* Tabla completa */}
      <TablaMunicipios data={municipios.tabla} />
    </main>
  );
}
