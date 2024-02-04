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

const canvas = Array.from(document.getElementsByClassName("canvas-bg-atomic"));
canvas.forEach((canva) => {
  const container = canva?.parentElement;
  const size = container?.getBoundingClientRect();
  const widthContainer = size?.width!;
  const heightContainer = size?.height!;
  const engine = Matter.Engine.create();
  const render = Matter.Render.create({
    element: canva as HTMLElement,
    engine: engine,
    options: {
      width: widthContainer,
      height: heightContainer,
      background: "transparent",
      wireframes: false,
    },
  });
  const wight = 1;
  const floor = rectangle({
    x: widthContainer / 2,
    y: heightContainer,
    width: widthContainer,
    height: wight,
    fillColor: "transparent",
    isStatic: true,
  });
  const leftWall = rectangle({
    x: 0,
    y: heightContainer / 2,
    width: wight,
    height: heightContainer,
    fillColor: "transparent",
    isStatic: true,
  });
  const rightWall = rectangle({
    x: widthContainer,
    y: heightContainer / 2,
    width: wight,
    height: heightContainer,
    fillColor: "transparent",
    isStatic: true,
  });
  const bar = rectangle({
    x: widthContainer / 2,
    y: 0,
    width: widthContainer * 0.95,
    height: heightContainer * 0.1,
    fillColor: quinacridoneMagentaColor,
  });
  const disco = circle({
    x: widthContainer / 4,
    y: heightContainer / 2,
    radio: widthContainer / 4,
    fillColor: brightPinkCrayolaColor,
  });
  const column = rectangle({
    x: widthContainer * 0.75,
    y: heightContainer / 2,
    width: widthContainer / 2,
    height: heightContainer - heightContainer / 4,
    fillColor: atomicTangerineColor,
  });

  Matter.World.add(engine.world, [
    disco,
    column,
    bar,
    rightWall,
    leftWall,
    floor,
  ]);
  Matter.Render.run(render);
  const runner = Matter.Runner.create();
  Matter.Runner.run(runner, engine);
});
