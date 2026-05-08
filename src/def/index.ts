import type { Registry } from '../types/registry';

import prefix from './prefix';
import unit from './unit';

export default ( { unit, prefix } ) as const satisfies Registry;
