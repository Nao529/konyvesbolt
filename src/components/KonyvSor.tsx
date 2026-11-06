import type { KonyvTipus } from "../adatok";
import { useTablazatContext } from "../contexts/TablazatContext";

interface SorProps {
  Konyv: KonyvTipus;
}

function KonyvSor({ Konyv }: SorProps) {
  const { torles } = useTablazatContext();

  return (
    <tr>
      <td>{Konyv.id}</td>
      <td>{Konyv.cim}</td>
      <td>{Konyv.szerzo}</td>
      <td>{Konyv.ar} Ft</td>
      <td>{Konyv.darabszam}</td>
      <td>
        <button type="button" onClick={() => torles(Konyv.id)}>Törlés</button>
      </td>
    </tr>
  );
}

export default KonyvSor;
