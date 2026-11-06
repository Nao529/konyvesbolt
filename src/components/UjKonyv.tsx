import React, { useState } from "react";
import { useTablazatContext, type UjKonyvTipus } from "../contexts/TablazatContext";

function UjKonyv() {
  const { konyvHozzaadas } = useTablazatContext();
  const [cim, setCim] = useState<string>("");
  const [szerzo, setSzerzo] = useState<string>("");
  const [ar, setAr] = useState<number>(0);
  const [darabszam, setDarabszam] = useState<number>(0);

  function mentes(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const ujKonyv: UjKonyvTipus = {
      cim,
      szerzo,
      ar,
      darabszam
    };
    console.log(ujKonyv)
    /* ide jöhetne még ellenőrzés is, ha pl cím üres, stb.. */
    konyvHozzaadas(ujKonyv);
    //mezők ürítése mentés után
    setCim("");
    setSzerzo("");
    setAr(0);
    setDarabszam(0);
  }
  return (
    <section className="uj-konyv">
      <h2>Új könyv rögzítése</h2>
      <form onSubmit={mentes}>
        <div className="form-mezo">
          <label htmlFor="cim">Könyv címe</label>
          <input
            type="text"
            id="cim"
            name="cim"
            value={cim}
            onChange={(e) => setCim(e.target.value)}
            required
          />
        </div>
        <div className="form-mezo">
          <label htmlFor="cim">Szerző</label>
          <input
            type="text"
            id="szerzo"
            name="szerzo"
            value={szerzo}
            onChange={(e) => setSzerzo(e.target.value)}
            required
          />
        </div>
        <div className="form-mezo">
          <label htmlFor="ar">Ár (ft)</label>
          <input
            type="text"
            id="ar"
            name="ar"
            value={ar}
            onChange={(e) => setAr(Number(e.target.value))}
            required
          />
        </div>
        <div className="form-mezo">
          <label htmlFor="darabszam">Darabszám</label>
          <input
            type="text"
            id="darabszam"
            name="darabszam"
            value={darabszam}
            onChange={(e) => setDarabszam(Number(e.target.value))}
            required
          />
        </div>
        <input type="submit" value={"Hozzáad"} />
      </form>
    </section>
  )
}

export default UjKonyv;