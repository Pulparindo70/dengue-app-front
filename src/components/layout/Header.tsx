"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { name: "Inicio", href: "/" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Estadísticas", href: "/estadisticas" },
  { name: "Acerca", href: "/acerca" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-bold text-purple-700">
          🦟 DengueApp
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-4 items-center">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-black transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden px-4 pb-4 flex flex-col gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-black transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
