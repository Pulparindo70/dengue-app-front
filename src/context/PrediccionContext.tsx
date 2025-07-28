"use client";

import { createContext, useContext, useState } from "react";

interface DatosPrediccion {
  edad: number;
  sexo: string;
  tipo_paciente: string;
  dictamen: string;
  diabetes: number;
  hipertension: number;
  embarazo: number;
  inmunosupresion: number;
}

interface ResultadoPrediccion {
  riesgo: number | null; // 0 = bajo, 1 = alto
  datos: DatosPrediccion | null;
}

interface PrediccionContextProps {
  resultado: ResultadoPrediccion;
  setResultado: (data: ResultadoPrediccion) => void;
  resetResultado: () => void;
}

const PrediccionContext = createContext<PrediccionContextProps | undefined>(
  undefined
);

export const PrediccionProvider = ({ children }: { children: React.ReactNode }) => {
  const [resultado, setResultadoState] = useState<ResultadoPrediccion>({
    riesgo: null,
    datos: null,
  });

  const setResultado = (data: ResultadoPrediccion) => {
    setResultadoState(data);
  };

  const resetResultado = () => {
    setResultadoState({ riesgo: null, datos: null });
  };

  return (
    <PrediccionContext.Provider value={{ resultado, setResultado, resetResultado }}>
      {children}
    </PrediccionContext.Provider>
  );
};

export const usePrediccion = () => {
  const context = useContext(PrediccionContext);
  if (!context) {
    throw new Error("usePrediccion debe usarse dentro de PrediccionProvider");
  }
  return context;
};
