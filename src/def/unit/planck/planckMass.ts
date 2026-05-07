import type { MassDim } from '../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../types/unit';

export const planckMass = 'mP' as UnitRef< MassDim, 'mP' >;

export default ( {
  id: planckMass,
  dim: [ 0, 0, 1, 0, 0, 0, 0 ],
  structure: [],
  conversion: {
    factor: 2.17643424e-5
  },
  prefixable: false,
  unitSystem: [ 'planck' ],
  aliases: [ 'planck mass' ],
  meta: {
    symbol: {
      default: {
        ascii: 'mP',
        latex: 'm_{\\mathrm{P}}'
      }
    },
    name: {
      en: [ 'Planck mass' ],
      de: [ 'Planck-Masse' ]
    },
    description: {
      en: 'Smallest meaningful unit of mass; Planck units',
      de: 'Kleinste sinnvolle Masseeinheit; Planck-Einheiten'
    }
  }
} ) as const satisfies UnitDef< MassDim, typeof planckMass >;
