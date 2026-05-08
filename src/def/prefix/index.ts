import type { PrefixRegistry } from '../../types/registry';

import { deca } from './positive/deca';
import { exa } from './positive/exa';
import { giga } from './positive/giga';
import { hecto } from './positive/hecto';
import { kilo } from './positive/kilo';
import { mega } from './positive/mega';
import { peta } from './positive/peta';
import { quetta } from './positive/quetta';
import { ronna } from './positive/ronna';
import { tera } from './positive/tera';
import { yotta } from './positive/yotta';
import { zetta } from './positive/zetta';

import { atto } from './negative/atto';
import { centi } from './negative/centi';
import { deci } from './negative/deci';
import { femto } from './negative/femto';
import { micro } from './negative/micro';
import { milli } from './negative/milli';
import { nano } from './negative/nano';
import { pico } from './negative/pico';
import { quekto } from './negative/quekto';
import { ronto } from './negative/ronto';
import { yocto } from './negative/yocto';
import { zepto } from './negative/zepto';

export default ( [
  quetta, ronna, yotta, zetta, exa, peta, tera, giga, mega, kilo, hecto, deca,
  deci, centi, milli, micro, nano, pico, femto, atto, zepto, yocto, ronto, quekto
] ) as const satisfies PrefixRegistry;
