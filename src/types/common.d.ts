export type Lang = 'en' | 'de';

export type UnitSystem =
  | 'si' | 'common' | 'imperial' | 'usc' | 'cgs'
  | 'gauss' | 'planck' | 'atomic' | 'astro';

export type Dimension = readonly [
  T: number, // time
  L: number, // length
  M: number, // mass
  I: number, // electric current
  θ: number, // temperature
  N: number, // amount
  J: number  // luminous intensity
];

export type Symbol = {
  plain: string;
  latex: string;
};

export type Name = [
  SINGULAR: string,
  PLURAL?: string
];

export type Meta = {
  symbol: {
    common: Symbol;
    locale?: { [ L in Lang ]?: Symbol };
  };
  name?: { [ L in Lang ]?: Name };
};
