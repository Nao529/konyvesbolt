import { createContext, useContext, useState, type ReactNode } from "react";
import { KONYVLISTA, type KonyvTipus } from "../adatok";

export type UjKonyvTipus = Omit<KonyvTipus, "id">;

interface TablazatContextValue {
  torles: (id: number) => void;
  konyvHozzaadas: (konyv: UjKonyvTipus) => void;
  konyvLista: KonyvTipus[];
}

export const TablazatContext = createContext<TablazatContextValue | undefined>(undefined);
interface TablazatProviderProps {
  children: ReactNode;
}

export function TablazatProvider({ children }: TablazatProviderProps) {
  const [konyvLista, setTablazatLista] = useState<KonyvTipus[]>(KONYVLISTA);
  
  function torles(id: number) {
    setTablazatLista((elozoLista) =>
      elozoLista.filter((konyv) => konyv.id !== id),
    );
  }
  function konyvHozzaadas(konyv: UjKonyvTipus) {
    const ujId = Math.max(
      0,
      ...konyvLista.map(k => k.id)
    ) + 1;
    const ujLista = [...konyvLista]
    ujLista.push({ ...konyv, id: ujId })
    setTablazatLista(ujLista)
  } 
  return (
    <TablazatContext.Provider value={{ torles, konyvLista, konyvHozzaadas }}>
      {children}
    </TablazatContext.Provider>
  );
}

/* saját hook */
export function useTablazatContext() {
  const context = useContext(TablazatContext);
  if (!context) {
    throw new Error("error");
  }
  return context;
}

export default TablazatContext;
