import type { PrefixRef } from './prefix';
import type { UnitRef } from './unit';

export type UnitRegistry = readonly UnitRef[];
export type PrefixRegistry = readonly PrefixRef[];

export type Registry = {
  unit: UnitRegistry;
  prefix: PrefixRegistry;
};
