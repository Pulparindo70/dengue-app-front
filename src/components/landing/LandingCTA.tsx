"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { HeartPulse, ArrowRight } from "lucide-react";

export default function LandingCTA() {
  const router = useRouter();

  return (
<section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gradient-to-br from-purple-600 to-indigo-600 text-white py-20 px-6">
  <div className="max-w-5xl w-full text-center mx-auto">
    <div className="flex justify-center mb-6">
      <HeartPulse className="w-12 h-12 animate-pulse text-white" />
    </div>
    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
      ¿Tienes síntomas? Evalúa tu riesgo en segundos
    </h2>
    <p className="text-lg sm:text-xl mb-8 text-white/90">
      Usa nuestra herramienta gratuita para saber si podrías estar en riesgo de complicaciones por dengue.
    </p>
    <Button
      onClick={() => router.push("/prediccion")}
      className="text-lg px-6 py-4 font-semibold"
      variant="secondary"
    >
      Comenzar Evaluación
      <ArrowRight className="ml-2 h-5 w-5" />
    </Button>
  </div>
</section>

  );
}
