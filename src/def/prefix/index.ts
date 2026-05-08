import type { PrefixRegistry } from '../../types/registry';

import { hecto } from './hecto';
import { kilo } from './kilo';

export default ( [
  hecto, kilo
] ) as const satisfies PrefixRegistry;
