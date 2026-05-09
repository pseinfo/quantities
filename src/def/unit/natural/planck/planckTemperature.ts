import type { TemperatureDim } from '../../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../../types/unit';

import { kelvin } from '../../si/base/kelvin';

export const planckTemperature = 'TP' as UnitRef< TemperatureDim, 'TP' >;

export default ( {
  id: planckTemperature,
  dim: [ 0, 0, 0, 0, 1, 0, 0 ],
  structure: [],
  conversion: {
    base: kelvin,
    factor: 1.41678416e32,
    uncertainty: 1.1e-5
  },
  prefixable: false,
  aliases: [ 'planck temperature', 'planck temperatures' ],
  context: {
    system: [ 'natural', 'natural_planck' ],
    status: 'active'
  },
  meta: {
    symbol: [ {
      id: 'TP',
      canonical: true,
      format: {
        plain: 'TP',
        unicode: 'Tₚ',
        latex: 'T_{\\mathrm{P}}'
      }
    } ],
    name: {
      en: [ 'Planck temperature', 'Planck temperatures' ],
      de: [ 'Plack-Temperatur', 'Plack-Temperaturen' ]
    },
    description: {
      en: 'Planck unit of temperature, defines the highest meaningful temperature in the universe',
      de: 'Planck-Einheit der Temperatur, definiert die höchste sinnvolle Temperatur im Universum'
    }
  }
} ) as const satisfies UnitDef< TemperatureDim, typeof planckTemperature >;
