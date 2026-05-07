import type { Dimension, Meta, UnitSystem } from './common';

export type UnitId< ID extends string > = ID & { readonly __brand: 'unitId' };

export type UnitStruct = Array< {
  unit: UnitDef;
  exp: number;
  prefix?: any;
} >;

export type UnitConv =
  | { factor: number }
  | { scale: number, offset: number }
  | 1;

export type UnitDef< D extends Dimension = Dimension, ID extends string = string > = {
  id: UnitId< ID >;
  dim: D;
  structure: UnitStruct;
  conversion: UnitConv;
  prefixable: boolean;
  unitSystem: UnitSystem[];
  aliases?: string[];
  meta: Meta< UnitDef< D > >;
};
