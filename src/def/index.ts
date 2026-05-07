import type { Registry } from '../types/registry';
import unitRegistry from './unit';

export default ( {
  unit: unitRegistry
} ) as const satisfies Registry;
