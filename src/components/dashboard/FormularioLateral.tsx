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
import { predecirDengue } from "@/lib/api";
import { usePrediccion } from "@/context/PrediccionContext";
import { toast } from "sonner";

export default function FormularioLateral() {
  const { setResultado } = usePrediccion();

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const prediccion = await predecirDengue({
        edad: parseInt(formulario.edad),
        sexo: formulario.sexo,
        tipo_paciente: formulario.tipo_paciente,
        dictamen: formulario.dictamen,
        diabetes: parseInt(formulario.diabetes),
        hipertension: parseInt(formulario.hipertension),
        embarazo: parseInt(formulario.embarazo),
        inmunosupresion: parseInt(formulario.inmunosupresion),
      });

      setResultado({
        riesgo: prediccion,
        datos: {
          edad: parseInt(formulario.edad),
          sexo: formulario.sexo,
          tipo_paciente: formulario.tipo_paciente,
          dictamen: formulario.dictamen,
          diabetes: parseInt(formulario.diabetes),
          hipertension: parseInt(formulario.hipertension),
          embarazo: parseInt(formulario.embarazo),
          inmunosupresion: parseInt(formulario.inmunosupresion),
        },
      });

      toast(`Predicción recibida: Riesgo = ${prediccion}`);
    } catch (error) {
      toast.error("Ocurrió un error al procesar la predicción.");
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
        Actualizar
      </Button>
    </form>
  );
}
