import type { TimeDim } from '../../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../../types/unit';

import { second } from '../../si/base/second';

export const planckTime = 'tP' as UnitRef< TimeDim, 'tP' >;

export default ( {
  id: planckTime,
  dim: [ 1, 0, 0, 0, 0, 0, 0 ],
  structure: [],
  conversion: {
    base: second,
    factor: 5.39124760e-44,
    uncertainty: 1.1e-5
  },
  prefixable: false,
  aliases: [ 'planck time', 'planck times' ],
  context: {
    system: [ 'natural', 'natural_planck' ],
    status: 'active'
  },
  meta: {
    symbol: [ {
      id: 'tP',
      canonical: true,
      format: {
        plain: 'tP',
        unicode: 'tₚ',
        latex: 't_{\\mathrm{P}}'
      }
    } ],
    name: {
      en: [ 'Planck time', 'Planck times' ],
      de: [ 'Plack-Zeit', 'Plack-Zeiten' ]
    },
    description: {
      en: 'Planck unit of time, defines the smallest meaningful time interval in the universe',
      de: 'Planck-Einheit der Zeit, definiert das kleinste sinnvolle Zeitintervall im Universum'
    }
  }
} ) as const satisfies UnitDef< TimeDim, typeof planckTime >;
