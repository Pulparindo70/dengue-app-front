import "./globals.css";
import { ReactNode } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner"; // ✅ usa el correcto
import { PrediccionProvider } from "@/context/PrediccionContext";

export const metadata = {
  title: "Predicción de Dengue",
  description: "App para evaluar riesgo de defunción",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-background text-foreground">
        <PrediccionProvider>
          <Header />
          <main className="min-h-[80vh] px-4">{children}</main>
          <Footer />
          <Toaster /> {/* ✅ CORRECTO */}
        </PrediccionProvider>
      </body>
    </html>
  );
}
