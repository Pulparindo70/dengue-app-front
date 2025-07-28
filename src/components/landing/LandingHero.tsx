"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function LandingHero() {
  const router = useRouter();

  return (
<section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gradient-to-b from-purple-100 to-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl md:text-7xl font-bold text-purple-700">
          🦟 DengueApp
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground">
          Evalúa tu riesgo de complicaciones por dengue en segundos. <br />
          Sin registros. Sin complicaciones. Solo respuestas.
        </p>
        <Button
          className="mt-8 text-base md:text-lg px-8 py-6"
          size="lg"
          onClick={() => router.push("/prediccion")}
        >
          Comenzar Evaluación
        </Button>
      </div>
    </section>
  );
}
