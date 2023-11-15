export enum Curso {
  D1 = "1D",
}

export enum Escuela {
  ETEC = "Escuela Técnica de la Universidad de Buenos Aires",
}

export type Haiku = {
  id: string;
  haiku: string;
  autoria: string;
  anio: string;
  escuela: Escuela;
  curso: Curso;
};
