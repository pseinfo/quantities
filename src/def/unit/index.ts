import type { UnitRegistry } from '../../types/registry';

import { astronomicalUnit } from './astronomical/astronomicalUnit';
import { lightYear } from './astronomical/lightYear';
import { parsec } from './astronomical/parsec';

import { ampere } from './si/base/ampere';
import { candela } from './si/base/candela';
import { gram } from './si/base/gram';
import { kelvin } from './si/base/kelvin';
import { meter } from './si/base/meter';
import { mole } from './si/base/mole';
import { second } from './si/base/second';

export default ( [
  // SI base units
  ampere, candela, gram, kelvin, meter, mole, second,
  // Astronomical units
  astronomicalUnit, lightYear, parsec
] ) as const satisfies UnitRegistry;
