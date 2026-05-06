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

export type Meta = {
  symbol: string;
  latex: string;
  name?: {
    en?: string;
    de?: string;
  };
};

export type UnitId = string & { __brand: 'unitId' };

export type Unit< D extends Dimension = Dimension > = {
  id: UnitId;
  dim: D;
  toSI?: ConversionFn;
  fromSI?: ConversionFn;
  meta: Meta;
};

export type PrefixId = string & { __brand: 'prefixId' };

export type Prefix = {
  id: string;
  factor: ConversionFn;
  meta: Meta;
};

export type QuantityId = string & { __brand: 'quantityId' };

export type Quantity< D extends Dimension = Dimension > = {
  id: QuantityId;
  dim: D;
  units: UnitId[];
  meta: Meta;
};

export type ConstantId = string & { __brand: 'constantId' };

export type Constant = {
  id: ConstantId;
  value: number;
  unit: UnitId;
  uncertainty?: number;
  meta: Meta;
};
