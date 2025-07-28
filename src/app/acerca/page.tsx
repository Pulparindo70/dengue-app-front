"use client";

import TituloPrincipal from "@/components/acerca/TituloPrincipal";
import QueHaceApp from "@/components/acerca/QueHaceApp";
import ComoUsarla from "@/components/acerca/ComoUsarla";
import SignificadoResultados from "@/components/acerca/SignificadoResultados";
import AvisoLegal from "@/components/acerca/AvisoLegal";

export default function AcercaPage() {
  return (
    <main className="max-w-4xl mx-auto py-10 px-4 space-y-10">
      <TituloPrincipal />
      <QueHaceApp />
      <ComoUsarla />
      <SignificadoResultados />
      <AvisoLegal />
    </main>
  );
}
