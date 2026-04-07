export interface PositionProps {
	x: number;
	y: number;
}

export interface SizeProps {
	width: number;
	height: number;
}

export interface VelocityProps {
	x: number;
	y: number;
}

export interface PlayerProps {
	position: PositionProps;
	velocity: VelocityProps;
	size: SizeProps;
	draw: () => void;
}
