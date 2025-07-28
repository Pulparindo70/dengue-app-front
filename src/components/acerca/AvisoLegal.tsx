import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { ShieldAlert } from "lucide-react";

export default function AvisoLegal() {
  return (
    <Alert variant="destructive">
      <ShieldAlert className="h-5 w-5" />
      <AlertTitle>Aviso Importante</AlertTitle>
      <AlertDescription>
        Esta herramienta no reemplaza una evaluación médica profesional. Es solo una estimación informativa basada en datos. Ante síntomas, acude a tu centro de salud.
      </AlertDescription>
    </Alert>
  );
}
