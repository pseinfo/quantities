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

export type UnitStructureType =
  | 'base'
  | 'derived';

export type UnitStatus =
  | 'active'
  | 'historical'
  | 'obsolete';

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
  aliases?: string[];
  context?: {
    system?: UnitSystem[];
    kind?: UnitStructureType;
    status?: UnitStatus;
    property?: {
      dimensionless?: boolean;
      logarithmic?: boolean;
    };
  };
  deprecated?: Deprecated< UnitRef< D > >;
  meta: Meta;
};
