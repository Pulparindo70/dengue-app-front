import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t py-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-muted-foreground">
        {/* Columna 1 */}
        <div>
          <h3 className="font-semibold text-black mb-2">Navegación</h3>
          <ul className="space-y-1">
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/prediccion">Predicción</Link></li>
            <li><Link href="/dashboard">Dashboard</Link></li>
            <li><Link href="/estadisticas">Estadísticas</Link></li>
            <li><Link href="/acerca">Acerca</Link></li>
          </ul>
        </div>

        {/* Columna 2 */}
        <div>
          <h3 className="font-semibold text-black mb-2">Sobre la app</h3>
          <p>
            Esta aplicación fue desarrollada con fines educativos para estimar riesgos de salud relacionados con el dengue.
          </p>
        </div>

        {/* Columna 3 */}
        <div className="text-center md:text-right">
          <h3 className="font-semibold text-black mb-2">Autores</h3>
          <p>Proyecto desarrollado por estudiantes de informática.</p>
          <p className="mt-1">&copy; {new Date().getFullYear()} DengueApp</p>
        </div>
      </div>
    </footer>
  );
}
