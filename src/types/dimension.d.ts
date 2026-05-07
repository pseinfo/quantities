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

export type ScalarDim = DimDef< [ 0, 0, 0, 0, 0, 0, 0 ] >;

export type TimeDim = DimDef< [ 1, 0, 0, 0, 0, 0, 0 ] >;
export type LengthDim = DimDef< [ 0, 1, 0, 0, 0, 0, 0 ] >;
export type MassDim = DimDef< [ 0, 0, 1, 0, 0, 0, 0 ] >;
