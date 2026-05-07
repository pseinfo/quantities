import type { UnitRegistry } from '../../types/registry';

import { gram } from './base/gram';
import { kelvin } from './base/kelvin';
import { meter } from './base/meter';
import { second } from './base/second';

export default new Set( [
  second, meter, gram, kelvin
] ) satisfies UnitRegistry;
