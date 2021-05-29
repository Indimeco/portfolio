export type ArchitectureVal<LandmarkDefinitions = Record<string, any>> =
	| number
	| ((landmarks: LandmarkDefinitions) => number);

export type BuildingPlan = {
	dimensions: {
		width: ArchitectureVal;
		height: ArchitectureVal;
		depth: ArchitectureVal;
	};
	position: {
		x: ArchitectureVal;
		z: ArchitectureVal;
	};
};

export type Building = {
	dimensions: {
		width: number;
		height: number;
		depth: number;
	};
	position: {
		x: number;
		z: number;
	};
};
