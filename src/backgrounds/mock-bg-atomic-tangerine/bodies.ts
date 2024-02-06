import { Bodies } from "matter-js";

import { quinacridoneMagentaColor, brightPinkCrayolaColor, atomicTangerineColor } from "./colors";

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

export const rectangle = ({ x, y, width, height, fillColor, isStatic = false }: IRectangle) =>
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
	const delta = 500;
	const bar = rectangle({
		x: props.width / 2,
		y: 0 - delta,
		width: props.width - wight,
		height: props.height * 0.1,
		fillColor: quinacridoneMagentaColor,
	});
	const disco = circle({
		x: props.width / 4,
		y: props.height / 2 - delta,
		radio: props.width / 4 - wight,
		fillColor: brightPinkCrayolaColor,
	});
	const column = rectangle({
		x: props.width * 0.75,
		y: props.height / 2 - delta,
		width: props.width / 2 - 2 * wight,
		height: props.height - props.height / 4,
		fillColor: atomicTangerineColor,
	});
	return [disco, column, bar, rightWall, leftWall, floor];
};
