import { Bodies, Common } from "matter-js";

interface IOrigami {
	x: number;
	y: number;
	size: number;
}

const DIM_ORIGAMI_PNG = 256;
const createOrigami = ({ x, y, size }: IOrigami): Matter.Body => {
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
}: IRectangle): Matter.Body =>
	Bodies.rectangle(x, y, width, height, {
		isStatic,
		render: { fillStyle: fillColor },
	});

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
	const delta = -500;
	const cantidadDeOrigamis = 30;
	const origamis = [];
	for (let i = 0; i < cantidadDeOrigamis; i++) {
		origamis.push(
			createOrigami({
				x: Common.random(0, props.width),
				y: Common.random(delta, 0),
				size: props.width * 0.2,
			}),
		);
	}
	return [rightWall, leftWall, floor, ...origamis];
};