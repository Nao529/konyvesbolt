import { useTablazatContext } from "../contexts/TablazatContext";
import KonyvSor from "./KonyvSor";
import "./KonyvTabla.css";

function KonyvTabla() {
  const { konyvLista } = useTablazatContext();

  return (
    <table className="konyv-tabla">
      <thead>
        <tr>
          <th>Id</th>
          <th>Cím</th>
          <th>Szerző</th>
          <th>Ár (ft)</th>
          <th>Darabszám</th>
          <th>Művelet</th>
        </tr>
      </thead>
      <tbody>
        {konyvLista.map((konyv, i) => {
          return <KonyvSor Konyv={konyv} key={i} />;
        })}
      </tbody>
    </table>
  );
}

export default KonyvTabla;
