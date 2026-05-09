import type { UnitRegistry } from '../../types/registry';

import { astronomicalUnit } from './astronomical/astronomicalUnit';
import { lightYear } from './astronomical/lightYear';
import { parsec } from './astronomical/parsec';

import { atomicMassUnit } from './natural/atomic/atomicMassUnit';

import { planckLength } from './natural/planck/planckLength';
import { planckMass } from './natural/planck/planckMass';
import { planckTemperature } from './natural/planck/planckTemperature';
import { planckTime } from './natural/planck/planckTime';

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
  // Natrural atomic units
  atomicMassUnit,
  // Natural Planck units
  planckLength, planckMass, planckTemperature, planckTime,
  // Astronomical units
  astronomicalUnit, lightYear, parsec
] ) as const satisfies UnitRegistry;
