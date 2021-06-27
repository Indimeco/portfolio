export type ArchitectureVal<LandmarkDefinitions = Record<string, any>> =
	| number
	| ((landmarks: LandmarkDefinitions) => number);

export type BuildingPlanDimension = {
	width: ArchitectureVal;
	height: ArchitectureVal;
	depth: ArchitectureVal;
};
export type BuildingPlanPosition = {
	x: ArchitectureVal;
	z: ArchitectureVal;
};

export type BuildingPlan = {
	dimensions: BuildingPlanDimension;
	position: BuildingPlanPosition;
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
