export type Dimension = readonly [
  T: number, // time
  L: number, // length
  M: number, // mass
  I: number, // electric current
  θ: number, // temperature
  N: number, // amount
  J: number  // luminous intensity
];

export type Unit< D extends Dimension = Dimension > = {
  dim: D;
  factor: number;
};

export type AffineUnit< D extends Dimension = Dimension > = {
  dim: D;
  scale: number;
  offset: number;
};
