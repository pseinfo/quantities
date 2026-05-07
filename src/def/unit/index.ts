import type { UnitRegistry } from '../../types/registry';

import { atomicMass } from './atomic/atomicMass';
import { bohrRadius } from './atomic/bohrRadius';

import { ampere } from './base/ampere';
import { gram } from './base/gram';
import { kelvin } from './base/kelvin';
import { meter } from './base/meter';
import { second } from './base/second';

import { degC } from './common/temperature/degCelsius';
import { degF } from './common/temperature/degFahrenheit';
import { degR } from './common/temperature/degRankine';

import { day } from './common/time/day';
import { hour } from './common/time/hour';
import { min } from './common/time/minute';
import { year } from './common/time/year';

import { planckLength } from './planck/planckLength';
import { planckMass } from './planck/planckMass';
import { planckTemp } from './planck/planckTemp';
import { planckTime } from './planck/planckTime';

export default ( [
  // SI base units
  ampere, gram, kelvin, meter, second,
  // SI derived units
  // Imperial units
  // USC units
  // CGS units
  // Gaussian units
  // Natural units
  // Atomic units
  atomicMass, bohrRadius,
  // Planck units
  planckLength, planckMass, planckTemp, planckTime,
  // Astronomical units
  // Common units
  degC, degF, degR,
  day, hour, min, year
] ) as const satisfies UnitRegistry;
