import { circle, rectangle } from "@utils/matterjs/bodies";

import {
	quinacridoneMagentaColor,
	brightPinkCrayolaColor,
	atomicTangerineColor,
} from "@utils/matterjs/colors";

interface PropsCreateBodies {
	width: number;
	height: number;
}

export const createBodies = (props: PropsCreateBodies): Matter.Body[] => {
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
