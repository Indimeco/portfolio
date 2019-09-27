export const palette = {
	darkCerulean: '#003B7A',
	absoluteZero: '#0056B3',
	periwinkle: '#CAE5FF',
	raisinBlack: '#262626',
	gunMetal: '#30343F',
	ghostWhite: '#FAFAFF',
};

export const theme = {
	colors: {
		root: {
			fg: palette.raisinBlack,
			bg: palette.ghostWhite,
			fgAccent: palette.absoluteZero,
			bgAccent: palette.periwinkle,
		},
		main: {
			fg: palette.ghostWhite,
			bg: palette.darkCerulean,
			fgAccent: palette.periwinkle,
			bgAccent: palette.absoluteZero,
		},
		aux: {
			fg: palette.ghostWhite,
			bg: palette.gunMetal,
			fgAccent: palette.periwinkle,
			bgAccent: palette.raisinBlack,
		},
	},
	spacing: {
		tiny: '5px',
		small: '10px',
		medium: '20px',
		large: '30px',
		huge: '60px',
	},
	fonts: {
		small: '14px',
		medium: '16px',
		large: '18px',
		huge: '30px',
		hero: '40px',
	},
	fontFamilies: {
		content: 'monospace',
		heading: 'palatino',
	},
};

export default theme;
