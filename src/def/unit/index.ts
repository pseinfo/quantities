import type { UnitRegistry } from '../../types/registry';

import { astroUnit } from './astronomical/astroUnit';
import { lightYear } from './astronomical/lightYear';
import { parsec } from './astronomical/parsec';

import { biot } from './cgs/emu/biot';
import { statampere } from './cgs/esu/statampere';

import { degC } from './common/temperature/degCelsius';
import { day } from './common/time/day';
import { hour } from './common/time/hour';
import { min } from './common/time/minute';
import { year } from './common/time/year';

import { degF } from './imperial/degFahrenheit';
import { degR } from './imperial/degRankine';

import { atomicMass } from './natural/atomic/atomicMass';
import { bohrRadius } from './natural/atomic/bohrRadius';

import { planckCurrent } from './natural/planck/planckCurrent';
import { planckLength } from './natural/planck/planckLength';
import { planckMass } from './natural/planck/planckMass';
import { planckTemp } from './natural/planck/planckTemp';
import { planckTime } from './natural/planck/planckTime';

import { ampere } from './si/ampere';
import { gram } from './si/gram';
import { kelvin } from './si/kelvin';
import { meter } from './si/meter';
import { second } from './si/second';

export default ( [
  // SI base units
  ampere, gram, kelvin, meter, second,
  // SI derived units

  // CGS / Gaussian units
  biot, statampere,
  // Atomic units
  atomicMass, bohrRadius,
  // Planck units
  planckCurrent, planckLength, planckMass, planckTemp, planckTime,
  // Imperial units
  degF, degR,
  // USC units

  // Astronomical units
  astroUnit, lightYear, parsec,
  // Common units
  degC,
  day, hour, min, year
] ) as const satisfies UnitRegistry;
