import type { TimeDim } from '../../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../../types/unit';

export const second = 's' as UnitRef< TimeDim, 's' >;

export default ( {
  id: second,
  dim: [ 1, 0, 0, 0, 0, 0, 0 ],
  structure: [],
  conversion: 1,
  prefixable: true,
  aliases: [ 'sec', 'second', 'seconds' ],
  context: {
    system: [ 'si' ],
    kind: 'base',
    status: 'active'
  },
  meta: {
    symbol: [ {
      id: 's',
      canonical: true,
      context: {
        system: [ 'si' ]
      },
      format: {
        plain: 's',
        latex: '\\mathrm{s}'
      }
    } ],
    name: {
      en: [ 'second', 'seconds' ],
      de: [ 'Sekunde', 'Sekunden' ]
    },
    description: {
      en: 'SI base unit of time',
      de: 'SI-Basiseinheit der Zeit'
    }
  }
} ) as const satisfies UnitDef< TimeDim, typeof second >;
