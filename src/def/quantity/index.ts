import type { QuantityRegistry } from '../../types/registry';

import { time } from './base/time';

export default ( [
  // Base quantities
  time
] ) as const satisfies QuantityRegistry;
