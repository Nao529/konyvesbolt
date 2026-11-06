export interface KonyvTipus {
  readonly id: number;
  cim: string;
  szerzo: string;
  ar: number;
  darabszam: number;
}

export const KONYVLISTA: KonyvTipus[] = [
  {
    id: 1,
    cim: "Konyv 1",
    szerzo: "Szerzo 1",
    ar: 3000,
    darabszam: 15,
  },
  {
    id: 2,
    cim: "Konyv 2",
    szerzo: "Szerzo 2",
    ar: 3500,
    darabszam: 19,
  },
  {
    id: 3,
    cim: "Konyv 3",
    szerzo: "Szerzo 3",
    ar: 2200,
    darabszam: 8,
  },
  {
    id: 4,
    cim: "Konyv 4",
    szerzo: "Szerzo 4",
    ar: 4100,
    darabszam: 23,
  },
  {
    id: 5,
    cim: "Konyv 5",
    szerzo: "Szerzo 5",
    ar: 1600,
    darabszam: 6,
  },
];
