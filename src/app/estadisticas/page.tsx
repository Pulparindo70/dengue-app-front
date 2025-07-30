"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import KpiResumen from "@/components/estadisticas/KpiResumen";
import GraficaBarrasMunicipios from "@/components/estadisticas/GraficaBarrasMunicipios";
import GraficaComorbilidades from "@/components/estadisticas/GraficaComorbilidades";
import GraficaTopEntidades from "@/components/estadisticas/GraficaTopEntidades";
import ResumenInteligente from "@/components/estadisticas/ResumenInteligente";
import TablaMunicipios from "@/components/estadisticas/TablaMunicipios";
import MapaCalorPlaceholder from "@/components/estadisticas/MapaCalorPlaceholder";
import LineaTiempoPlaceholder from "@/components/estadisticas/LineaTiempoPlaceholder";
import ComparadorEntidades from "@/components/estadisticas/ComparadorEntidades";
import { getResumen, MunicipioResumen } from "@/lib/api";
import { toast } from "sonner";

export default function EstadisticasPage() {
  const [entidad, setEntidad] = useState<string>("YUCATÁN");
  const [resumenEntidad, setResumenEntidad] = useState<MunicipioResumen[]>([]);
  const [resumenNacional, setResumenNacional] = useState<MunicipioResumen[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // ─────────────────── Fetch de datos ───────────────────
  useEffect(() => {
    setLoading(true);
    Promise.all([getResumen(entidad), getResumen()])
      .then(([ent, nac]) => {
        setResumenEntidad(ent.municipios);
        setResumenNacional(nac.municipios);
      })
      .catch(() => toast.error("No se pudieron cargar las estadísticas"))
      .finally(() => setLoading(false));
  }, [entidad]);

  // ─────────────────── Agregaciones ───────────────────
  const totales = useMemo(() => {
    return resumenEntidad.reduce(
      (acc, m) => ({
        totalCasos: acc.totalCasos + m.total_casos,
        totalMuertes: acc.totalMuertes + m.muertes,
        conDiabetes: acc.conDiabetes + m.diabetes,
        conHipertension: acc.conHipertension + m.hipertension,
        embarazo: acc.embarazo + m.embarazo,
        inmuno: acc.inmuno + m.inmunosupresion,
      }),
      {
        totalCasos: 0,
        totalMuertes: 0,
        conDiabetes: 0,
        conHipertension: 0,
        embarazo: 0,
        inmuno: 0,
      }
    );
  }, [resumenEntidad]);

  const topMunicipios = useMemo(() => {
    const sorted = [...resumenEntidad]
      .sort((a, b) => b.muertes - a.muertes)
      .slice(0, 5);
    return {
      labels: sorted.map((m) => m.municipio),
      valores: sorted.map((m) => m.muertes),
      tabla: sorted.map((m) => ({
        nombre: m.municipio,
        casos: m.total_casos,
        muertes: m.muertes,
      })),
    } as const;
  }, [resumenEntidad]);

  const topEntidades = useMemo(() => {
    const map = new Map<string, number>();
    resumenNacional.forEach((m) => {
      map.set(m.entidad, (map.get(m.entidad) || 0) + m.muertes);
    });
    const arr = Array.from(map.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);
    return {
      entidades: arr.map(([e]) => e),
      muertes: arr.map(([, v]) => v),
    } as const;
  }, [resumenNacional]);

  const comparador = useMemo(() => {
    const rival =
      topEntidades.entidades.find((e) => e !== entidad) ||
      topEntidades.entidades[0] || "";

    const muertesEntidadIndex = topEntidades.entidades.indexOf(entidad);
    const muertesEntidad =
      muertesEntidadIndex !== -1
        ? topEntidades.muertes[muertesEntidadIndex]
        : resumenEntidad.reduce((acc, m) => acc + m.muertes, 0);

    const muertesRivalIndex = topEntidades.entidades.indexOf(rival);
    const muertesRival =
      muertesRivalIndex !== -1 ? topEntidades.muertes[muertesRivalIndex] : 0;

    return {
      entidades: [entidad, rival],
      muertes: [muertesEntidad, muertesRival],
    };
  }, [entidad, topEntidades, resumenEntidad]);

  // ─────────────────── Render ───────────────────
  return (
    <main className="max-w-6xl mx-auto py-10 px-4 space-y-10">
      {/* Cabecera */}
      <header className="text-center space-y-1">
        <h1 className="text-3xl font-bold">Estadísticas del Dengue</h1>
        <p className="text-muted-foreground">
          Visualiza datos históricos por entidad, municipio y comorbilidades.
        </p>
      </header>

      {/* Selector de entidad */}
      <div className="max-w-xs mx-auto">
        <Select onValueChange={setEntidad} value={entidad}>
          <SelectTrigger>
            <SelectValue placeholder="Selecciona una entidad" />
          </SelectTrigger>
          <SelectContent>
            {Array.from(new Set(resumenNacional.map((m) => m.entidad).concat(entidad)))
              .sort()
              .map((ent) => (
                <SelectItem key={ent} value={ent}>
                  {ent}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
      </div>

      {loading ? (
        <section className="space-y-4">
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-40 w-full" />
          <Skeleton className="h-80 w-full" />
        </section>
      ) : (
        <>
          <KpiResumen
            totalCasos={totales.totalCasos}
            totalMuertes={totales.totalMuertes}
            conDiabetes={totales.conDiabetes}
            conHipertension={totales.conHipertension}
          />

          <ResumenInteligente
            entidad={entidad}
            totalCasos={totales.totalCasos}
            totalMuertes={totales.totalMuertes}
            comorbilidades={{
              diabetes: totales.conDiabetes,
              hipertension: totales.conHipertension,
              embarazo: totales.embarazo,
              inmuno: totales.inmuno,
            }}
          />

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GraficaBarrasMunicipios
              labels={topMunicipios.labels}
              valores={topMunicipios.valores}
            />
            <GraficaComorbilidades
              diabetes={totales.conDiabetes}
              hipertension={totales.conHipertension}
              embarazo={totales.embarazo}
              inmuno={totales.inmuno}
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

          <TablaMunicipios data={topMunicipios.tabla} />
        </>
      )}
    </main>
  );
}
