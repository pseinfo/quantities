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
    si: 'base',
    status: 'active'
  },
  meta: {
    symbol: [ {
      id: 's',
      canonical: true,
      format: {
        plain: 's',
        latex: '\\mathrm{s}'
      }
    }, {
      id: 'prime',
      format: {
        plain: '\'\'',
        unicode: '″',
        latex: '\\prime\\prime'
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
