export type Lang = 'en' | 'de';

export type UnitSystem =
  | 'si' | 'common' | 'imperial' | 'usc' | 'cgs' | 'gaussian'
  | 'natural' | 'atomic' | 'planck' | 'astronomical';

export type Dimension = readonly [
  T: number, // time
  L: number, // length
  M: number, // mass
  I: number, // electric current
  θ: number, // temperature
  N: number, // amount
  J: number  // luminous intensity
];

export type DimDef< D extends Dimension > = D;

export type Symbol = {
  ascii: string;
  unicode?: string;
  latex?: string;
};

export type Name = readonly [
  SINGULAR: string,
  PLURAL?: string
];

export type Deprecated< T > = {
  since?: string;
  reason?: string;
  replacement?: T;
};

export type Meta< T > = {
  symbol: {
    default: Symbol;
    localized?: { [ L in Lang ]?: Symbol };
  };
  name?: { [ L in Lang ]?: Name };
  description?: { [ L in Lang ]?: string };
  deprecated?: Deprecated< T >;
};
