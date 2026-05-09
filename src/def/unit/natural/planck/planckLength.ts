import type { LengthDim } from '../../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../../types/unit';

import { meter } from '../../si/base/meter';

export const planckLength = 'lP' as UnitRef< LengthDim, 'lP' >;

export default ( {
  id: planckLength,
  dim: [ 0, 1, 0, 0, 0, 0, 0 ],
  structure: [],
  conversion: {
    base: meter,
    factor: 1.61625518e-35,
    uncertainty: 1.1e-5
  },
  prefixable: false,
  aliases: [ 'planck length', 'planck lengths' ],
  context: {
    system: [ 'natural', 'natural_planck' ],
    status: 'active'
  },
  meta: {
    symbol: [ {
      id: 'lP',
      canonical: true,
      format: {
        plain: 'lP',
        unicode: 'lₚ',
        latex: 'l_{\\mathrm{P}}'
      }
    } ],
    name: {
      en: [ 'Planck length', 'Planck lengths' ],
      de: [ 'Plack-Länge', 'Plack-Längen' ]
    },
    description: {
      en: 'Planck unit of length, defines the smallest meaningful length in the universe',
      de: 'Planck-Einheit der Länge, definiert die kleinste sinnvolle Länge im Universum'
    }
  }
} ) as const satisfies UnitDef< LengthDim, typeof planckLength >;
