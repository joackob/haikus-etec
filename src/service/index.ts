import type { Haiku } from "../models";
import { Curso, Escuela } from "../models";

const haikus: Haiku[] = [
  {
    id: "El sol brilloso\ncamina con nosotros\ny se apaga.",
    autoria: "Camila Vargas Pinto",
    haiku: `El sol brilloso <br/> camina con nosotros <br/> y se apaga.`,
    anio: "2023",
    curso: Curso.D1,
    escuela: Escuela.ETEC,
  },
];

const getARandomHaiku = (): Haiku => {
  return haikus[Math.floor(Math.random() * haikus.length)];
};

export default { getARandomHaiku };
