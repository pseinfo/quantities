import type { Registry } from '../types/registry';
import units from './unit';

export default ( {
  unit: units
} ) as const satisfies Registry;
