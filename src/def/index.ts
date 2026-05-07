import type { Registry } from '../types/registry';

import prefixRegistry from './prefix';
import unitRegistry from './unit';

export default ( {
  unit: unitRegistry,
  prefix: prefixRegistry
} ) as const satisfies Registry;
