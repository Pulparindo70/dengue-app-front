export async function predecirDengue(datos: {
  edad: number;
  sexo: string;
  tipo_paciente: string;
  dictamen: string;
  diabetes: number;
  hipertension: number;
  embarazo: number;
  inmunosupresion: number;
}) {
  try {
    const res = await fetch("http://localhost:5000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        EDAD_ANOS: datos.edad,
        SEXO: datos.sexo,
        TIPO_PACIENTE: datos.tipo_paciente,
        DICTAMEN: datos.dictamen,
        DIABETES: datos.diabetes,
        HIPERTENSION: datos.hipertension,
        EMBARAZO: datos.embarazo,
        INMUNOSUPR: datos.inmunosupresion,
      }),
    });

    if (!res.ok) {
      throw new Error("Error al procesar la predicción");
    }

    const json = await res.json();
    return json.prediccion;
  } catch (error) {
    console.error("Error en predecirDengue:", error);
    throw error;
  }
}
