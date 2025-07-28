import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  { label: "Casos en 2024", value: "45,200+" },
  { label: "Defunciones registradas", value: "1,230" },
  { label: "Edad promedio", value: "32 años" },
  { label: "Entidad con más casos", value: "Veracruz" },
];

export default function LandingStats() {
  return (
    <section className="max-w-6xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
      {stats.map((stat) => (
        <Card key={stat.label} className="text-center">
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl font-bold">{stat.value}</CardTitle>
          </CardHeader>
          <CardContent className="text-xs text-muted-foreground">{stat.label}</CardContent>
        </Card>
      ))}
    </section>
  );
}
