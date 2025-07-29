"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { usePrediccion } from "@/context/PrediccionContext";
import { toast } from "sonner";

export default function FormularioLateral() {
  const { setResultado, resultado } = usePrediccion();

  const [formulario, setFormulario] = useState({
    edad: "",
    sexo: "",
    tipo_paciente: "",
    dictamen: "",
    diabetes: "0",
    hipertension: "0",
    embarazo: "0",
    inmunosupresion: "0",
  });

  const handleChange = (campo: string, valor: string) => {
    setFormulario((prev) => ({ ...prev, [campo]: valor }));
  };

  const transformarDatos = () => {
    return {
      EDAD_ANOS: parseInt(formulario.edad),
      SEXO: formulario.sexo,
      TIPO_PACIENTE: formulario.tipo_paciente,
      DICTAMEN: formulario.dictamen,
      DIABETES: parseInt(formulario.diabetes),
      HIPERTENSION: parseInt(formulario.hipertension),
      EMBARAZO: parseInt(formulario.embarazo),
      INMUNOSUPR: parseInt(formulario.inmunosupresion),
    };
  };

  const generarCSVBlob = (datos: Record<string, string | number>) => {
    const columnas = Object.keys(datos).join(",");
    const valores = Object.values(datos).join(",");
    const contenido = `${columnas}\n${valores}`;
    console.log("CSV generado:\n", contenido);
    return new Blob([contenido], { type: "text/csv" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const datosTransformados = transformarDatos();
    const csvBlob = generarCSVBlob(datosTransformados);
    const formData = new FormData();
    formData.append("file", csvBlob, "usuario.csv");

    try {
      const response = await fetch("http://localhost:5000/predict?umbral=0.9", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Error en el servidor");

      const result = await response.json();

      setResultado({
        riesgo: result.prediccion ?? "Desconocido",
        probabilidad: result.probabilidad_riesgo ?? null,
        mensaje: result.mensaje ?? "Desconocido",
        datos: datosTransformados,
      });

      toast.success(`Predicción recibida: ${result.mensaje}`);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Ocurrió un error al enviar los datos.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white p-4 rounded-xl shadow-md"
    >
      <Label>Edad</Label>
      <Input
        type="number"
        placeholder="Edad en años"
        value={formulario.edad}
        onChange={(e) => handleChange("edad", e.target.value)}
      />

      <Label>Sexo</Label>
      <Select onValueChange={(v) => handleChange("sexo", v)}>
        <SelectTrigger>
          <SelectValue placeholder="Selecciona sexo" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Hombre">Hombre</SelectItem>
          <SelectItem value="Mujer">Mujer</SelectItem>
        </SelectContent>
      </Select>

      <Label>Tipo de paciente</Label>
      <Select onValueChange={(v) => handleChange("tipo_paciente", v)}>
        <SelectTrigger>
          <SelectValue placeholder="Selecciona tipo" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Ambulatorio">Ambulatorio</SelectItem>
          <SelectItem value="Hospitalizado">Hospitalizado</SelectItem>
        </SelectContent>
      </Select>

      <Label>Dictamen</Label>
      <Select onValueChange={(v) => handleChange("dictamen", v)}>
        <SelectTrigger>
          <SelectValue placeholder="Selecciona dictamen" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Sospechoso">Sospechoso</SelectItem>
          <SelectItem value="Confirmado">Confirmado</SelectItem>
        </SelectContent>
      </Select>

      <Label>¿Tiene diabetes?</Label>
      <Select onValueChange={(v) => handleChange("diabetes", v)}>
        <SelectTrigger>
          <SelectValue placeholder="¿Tiene diabetes?" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Sí</SelectItem>
          <SelectItem value="0">No</SelectItem>
        </SelectContent>
      </Select>

      <Label>¿Tiene hipertensión?</Label>
      <Select onValueChange={(v) => handleChange("hipertension", v)}>
        <SelectTrigger>
          <SelectValue placeholder="¿Tiene hipertensión?" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Sí</SelectItem>
          <SelectItem value="0">No</SelectItem>
        </SelectContent>
      </Select>

      <Label>¿Está embarazada?</Label>
      <Select onValueChange={(v) => handleChange("embarazo", v)}>
        <SelectTrigger>
          <SelectValue placeholder="¿Está embarazada?" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Sí</SelectItem>
          <SelectItem value="0">No</SelectItem>
        </SelectContent>
      </Select>

      <Label>¿Está inmunosuprimido?</Label>
      <Select onValueChange={(v) => handleChange("inmunosupresion", v)}>
        <SelectTrigger>
          <SelectValue placeholder="¿Está inmunosuprimido?" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Sí</SelectItem>
          <SelectItem value="0">No</SelectItem>
        </SelectContent>
      </Select>

      <Button type="submit" className="w-full">
        Enviar para predicción
      </Button>

      {resultado && (
        <div
          className={`mt-6 p-4 rounded-lg font-semibold text-center ${
            resultado.riesgo === 1
              ? "bg-red-100 text-red-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          {resultado.mensaje} <br />
          Riesgo estimado:{" "}
          <span className="font-mono">
            {(resultado.probabilidad * 100).toFixed(2)}%
          </span>
        </div>
      )}
    </form>
  );
}
