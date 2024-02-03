import { Bodies } from "matter-js";

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
