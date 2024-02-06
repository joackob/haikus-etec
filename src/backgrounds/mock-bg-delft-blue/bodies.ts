import { Bodies, Body } from "matter-js";

interface IOrigami {
  x: number;
  y: number;
  size: number;
}

const DIM_ORIGAMI_PNG = 256;
const createOrigami = ({ x, y, size }: IOrigami) => {
  return Bodies.circle(x, y, size / 2, {
    render: {
      sprite: {
        texture: "haikus-etec/imgs/origami.png",
        xScale: size / DIM_ORIGAMI_PNG,
        yScale: size / DIM_ORIGAMI_PNG,
      },
    },
  });
};

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

interface PropsCreateBodies {
  width: number;
  height: number;
}

export const createBodies = (props: PropsCreateBodies) => {
  const wight = 10;
  const floor = rectangle({
    x: props.width / 2,
    y: props.height,
    width: props.width,
    height: wight,
    fillColor: "transparent",
    isStatic: true,
  });
  const leftWall = rectangle({
    x: 0,
    y: props.height / 2,
    width: wight,
    height: props.height,
    fillColor: "transparent",
    isStatic: true,
  });
  const rightWall = rectangle({
    x: props.width,
    y: props.height / 2,
    width: wight,
    height: props.height,
    fillColor: "transparent",
    isStatic: true,
  });
  const delta = 0;
  const origami = createOrigami({
    x: props.width / 2,
    y: -delta,
    size: props.width * 0.2,
  });
  return [rightWall, leftWall, floor, origami];
};
