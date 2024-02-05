import { Bodies } from "matter-js";

import {
  quinacridoneMagentaColor,
  brightPinkCrayolaColor,
  atomicTangerineColor,
} from "./colors";

interface ICircle {
  x: number;
  y: number;
  radio: number;
  fillColor: string;
}

export const circle = ({ x, y, radio, fillColor }: ICircle) =>
  Bodies.circle(x, y, radio, { render: { fillStyle: fillColor } });

interface IRectangle {
  x: number;
  y: number;
  width: number;
  height: number;
  fillColor: string;
  isStatic?: boolean;
}

export const rectangle = ({
  x,
  y,
  width,
  height,
  fillColor,
  isStatic = false,
}: IRectangle) =>
  Bodies.rectangle(x, y, width, height, {
    isStatic,
    render: { fillStyle: fillColor },
  });

export const createBodies = (size: DOMRect) => {
  const wight = 1;
  const floor = rectangle({
    x: size.width / 2,
    y: size.height,
    width: size.width,
    height: wight,
    fillColor: "transparent",
    isStatic: true,
  });
  const leftWall = rectangle({
    x: 0,
    y: size.height / 2,
    width: wight,
    height: size.height,
    fillColor: "transparent",
    isStatic: true,
  });
  const rightWall = rectangle({
    x: size.width,
    y: size.height / 2,
    width: wight,
    height: size.height,
    fillColor: "transparent",
    isStatic: true,
  });
  const delta = 500;
  const bar = rectangle({
    x: size.width / 2,
    y: 0 - delta,
    width: size.width * 0.95,
    height: size.height * 0.1,
    fillColor: quinacridoneMagentaColor,
  });
  const disco = circle({
    x: size.width / 4,
    y: size.height / 2 - delta,
    radio: size.width / 4,
    fillColor: brightPinkCrayolaColor,
  });
  const column = rectangle({
    x: size.width * 0.75,
    y: size.height / 2 - delta,
    width: size.width / 2,
    height: size.height - size.height / 4,
    fillColor: atomicTangerineColor,
  });
  return [disco, column, bar, rightWall, leftWall, floor];
};
