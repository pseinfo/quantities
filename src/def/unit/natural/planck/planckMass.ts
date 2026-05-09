import type { MassDim } from '../../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../../types/unit';

export const planckMass = 'mP' as UnitRef< MassDim, 'mP' >;

export default ( {
  id: planckMass,
  dim: [ 0, 0, 1, 0, 0, 0, 0 ],
  structure: [],
  conversion: {
    factor: 2.17643424e-5
  },
  prefixable: false,
  aliases: [ 'planck mass', 'planck masses' ],
  context: {
    system: [ 'natural', 'natural_planck' ],
    status: 'active'
  },
  meta: {
    symbol: [ {
      id: 'mP',
      canonical: true,
      format: {
        plain: 'mP',
        unicode: 'mₚ',
        latex: 'm_{\\mathrm{P}}'
      }
    } ],
    name: {
      en: [ 'Planck mass', 'Planck masses' ],
      de: [ 'Plack-Masse', 'Plack-Massen' ]
    },
    description: {
      en: 'Planck unit of mass, defines the smallest meaningful mass in the universe',
      de: 'Planck-Einheit der Masse, definiert die kleinste sinnvolle Masse im Universum'
    }
  }
} ) as const satisfies UnitDef< MassDim, typeof planckMass >;
