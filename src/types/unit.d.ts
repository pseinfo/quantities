import type { Deprecated, Meta, UnitSystem } from './common';
import type { Dimension } from './dimension';
import type { PrefixRef } from './prefix';

export type UnitRef<
  D extends Dimension = Dimension,
  ID extends string = string
> = ID & {
  readonly __brand: 'unitRef',
  readonly __dim: D;
};

export type UnitCategory =
  | 'base'
  | 'derived'
  | 'coherent'
  | 'accepted'
  | 'historical'
  | 'obsolete'
  | 'dimensionless'
  | 'logarithmic';

export type UnitStruct = Array< {
  unit: UnitRef;
  exp: number;
  prefix?: PrefixRef;
} >;

export type UnitConv =
  | { factor: number, uncertainty?: number }
  | { scale: number, offset: number, uncertainty?: number }
  | 1;

export type UnitDef<
  D extends Dimension = Dimension,
  R extends UnitRef< D > = UnitRef< D >
> = {
  readonly id: R;
  readonly dim: D;
  structure: UnitStruct;
  conversion: UnitConv;
  prefixable: boolean;
  unitSystem: UnitSystem[];
  category?: UnitCategory[];
  aliases?: string[];
  deprecated?: Deprecated< UnitRef< D > >;
  meta: Meta;
};
