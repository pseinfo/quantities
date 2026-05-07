import type { Deprecated, Meta, UnitSystem } from './common';
import type { Dimension } from './dimension';

export type UnitId< ID extends string = string > = ID & { readonly __brand: 'unitId' };

export type UnitCategory =
  | 'base' | 'derived' | 'coherent' | 'accepted' | 'non_si' 
  | 'historical' | 'obsolete' | 'dimensionless' | 'logarithmic';

export type UnitStruct = Array< {
  unit: UnitDef;
  exp: number;
  prefix?: any;
} >;

export type UnitConv =
  | { factor: number }
  | { scale: number, offset: number }
  | 1;

export type UnitDef<
  D extends Dimension = Dimension,
  ID extends UnitId = UnitId
> = {
  id: ID;
  dim: D;
  structure: UnitStruct;
  conversion: UnitConv;
  prefixable: boolean;
  unitSystem: UnitSystem[];
  category?: UnitCategory[];
  aliases?: string[];
  deprecated?: Deprecated< UnitDef< D > >;
  meta: Meta;
};
