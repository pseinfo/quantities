import type { UnitRef } from './unit';

export type UnitRegistry = readonly UnitRef[];

export type Registry = {
  unit: UnitRegistry;
};
