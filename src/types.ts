export type Dimension = readonly [
  T: number, // time
  L: number, // length
  M: number, // mass
  I: number, // electric current
  θ: number, // temperature
  N: number, // amount
  J: number  // luminous intensity
];

export type ConversionFn = ( v: number ) => number;

export type Unit< D extends Dimension = Dimension > = {
  key: string;
  dim: D;
  symbol: string;
  latex: string;
  toSI?: ConversionFn;
  fromSI?: ConversionFn;
  name?: {
    en?: string;
    de?: string;
  }
};
