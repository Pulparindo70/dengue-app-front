import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

type Municipio = {
  nombre: string;
  casos: number;
  muertes: number;
};

type Props = {
  data: Municipio[];
};

export default function TablaMunicipios({ data }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Municipios Registrados</CardTitle>
      </CardHeader>
      <CardContent className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b text-left">
              <th className="p-2">Municipio</th>
              <th className="p-2">Casos</th>
              <th className="p-2">Muertes</th>
            </tr>
          </thead>
          <tbody>
            {data.map((m, i) => (
              <tr key={i} className="border-b hover:bg-muted/40">
                <td className="p-2">{m.nombre}</td>
                <td className="p-2">{m.casos}</td>
                <td className="p-2">{m.muertes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
