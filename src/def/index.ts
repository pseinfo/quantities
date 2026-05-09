import type { Registry } from '../types/registry';

import prefix from './prefix';
import quantity from './quantity';
import unit from './unit';

export default ( { quantity, unit, prefix } ) as const satisfies Registry;
