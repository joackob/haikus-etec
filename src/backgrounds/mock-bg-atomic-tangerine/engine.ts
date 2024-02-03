import Matter from "matter-js";
import { circle, rectangle } from "./bodies";

// /* CSS HEX */
// --atomic-tangerine: #fd9678ff;
// --burnt-sienna: #d97c65ff;
// --bright-pink-crayola: #f54768ff;
// --quinacridone-magenta: #974063ff;
// --delft-blue: #41436aff;
// --jet: #3e3638ff;
//
const atomicTangerineColor = "#fd9678ff";
const brightPinkCrayolaColor = "#f54768ff";
const quinacridoneMagentaColor = "#974063ff";
const delftBlueColor = "#41436aff";

const canvas = document.getElementsByClassName("canvas-bg-atomic");
for (let index = 0; index < canvas.length; index++) {
  const canva = canvas[index];
  const parent = canva?.parentElement;
  const bounding = parent?.getBoundingClientRect();
  const widthCanva = bounding?.width!;
  const heightCanva = bounding?.height!;
  const motor = Matter.Engine.create();
  const render = Matter.Render.create({
    element: canva as HTMLElement,
    engine: motor,
    options: {
      width: widthCanva,
      height: heightCanva,
      background: "transparent",
      wireframes: false,
    },
  });
  const espesor = 1;
  const suelo = rectangle({
    x: widthCanva / 2,
    y: heightCanva,
    width: widthCanva,
    height: espesor,
    fillColor: "transparent",
    isStatic: true,
  });
  const muroIzquierdo = rectangle({
    x: 0,
    y: heightCanva / 2,
    width: espesor,
    height: heightCanva,
    fillColor: "transparent",
    isStatic: true,
  });
  const muroDerecho = rectangle({
    x: widthCanva,
    y: heightCanva / 2,
    width: espesor,
    height: heightCanva,
    fillColor: "transparent",
    isStatic: true,
  });
  const barra = rectangle({
    x: widthCanva / 2,
    y: 0,
    width: widthCanva * 0.95,
    height: heightCanva * 0.1,
    fillColor: quinacridoneMagentaColor,
  });
  const circulo = circle({
    x: widthCanva / 4,
    y: heightCanva / 2,
    radio: widthCanva / 4,
    fillColor: brightPinkCrayolaColor,
  });
  const columna = rectangle({
    x: widthCanva * 0.75,
    y: heightCanva / 2,
    width: widthCanva / 2,
    height: heightCanva - heightCanva / 4,
    fillColor: atomicTangerineColor,
  });

  Matter.World.add(motor.world, [
    circulo,
    columna,
    barra,
    muroDerecho,
    muroIzquierdo,
    suelo,
  ]);
  Matter.Render.run(render);
  const runner = Matter.Runner.create();
  Matter.Runner.run(runner, motor);
}
