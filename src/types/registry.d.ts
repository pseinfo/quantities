import type { UnitRef } from './unit';

export type UnitRegistry = Set< UnitRef >;

export type Registry = {
  unit: UnitRegistry;
};
