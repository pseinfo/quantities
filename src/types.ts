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

export type Name = {
  en?: string;
  de?: string;
};

export type UnitId = string & { __brand: 'unitId' };

export type Unit< D extends Dimension = Dimension > = {
  key: UnitId;
  dim: D;
  symbol: string;
  latex: string;
  toSI?: ConversionFn;
  fromSI?: ConversionFn;
  name?: Name;
};

export type Prefix = {
  key: string;
  symbol: string;
  latex: string;
  factor: ConversionFn;
  name?: Name;
};

export type QuantityId = string & { __brand: 'quantityId' };

export type Quantity< D extends Dimension = Dimension > = {
  key: QuantityId;
  dim: D;
  units: UnitId[];
  symbol: string;
  latex: string;
  name?: Name;
};
