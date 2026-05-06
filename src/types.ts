export type Dimension = readonly [
  T: number, // time
  L: number, // length
  M: number, // mass
  I: number, // electric current
  θ: number, // temperature
  N: number, // amount
  J: number  // luminous intensity
];

export type Meta = {
  symbol: string;
  latex: string;
  name?: {
    en?: string;
    de?: string;
  };
};

type UnitStructure = Array< {
  unit: Unit;
  exponent: number;
  prefix?: PrefixId;
} >;

export type LinearUnitConversion = {
  factor: number;
};

export type AffineUnitConversion = {
  scale: number;
  offset: number;
};

export type UnitConversion =
  | LinearUnitConversion
  | AffineUnitConversion;

export type UnitId = string & { __brand: 'unitId' };

export type Unit< D extends Dimension = Dimension > = {
  id: UnitId;
  dim: D;
  structure: UnitStructure;
  conversion: UnitConversion;
  prefixable: boolean;
  meta: Meta;
};

export type PrefixId = string & { __brand: 'prefixId' };

export type Prefix = {
  id: PrefixId;
  factor: number;
  meta: Meta;
};

export type QuantityId = string & { __brand: 'quantityId' };

export type Quantity< D extends Dimension = Dimension > = {
  id: QuantityId;
  dim: D;
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

export type Registry = {
  units: Map< UnitId, Unit >;
  prefixes: Map< PrefixId, Prefix >;
  quantities: Map< QuantityId, Quantity >;
  constants: Map< ConstantId, Constant >;
};
