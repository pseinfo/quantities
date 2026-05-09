import type { LengthDim } from '../../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../../types/unit';

export const meter = 'm' as UnitRef< LengthDim, 'm' >;

export default ( {
  id: meter,
  dim: [ 0, 1, 0, 0, 0, 0, 0 ],
  structure: [],
  conversion: 1,
  prefixable: true,
  aliases: [ 'meter', 'meters', 'metre', 'metres' ],
  context: {
    system: [ 'si' ],
    si: 'base',
    status: 'active'
  },
  meta: {
    symbol: [ {
      id: 'm',
      canonical: true,
      context: {
        system: [ 'si' ]
      },
      format: {
        plain: 'm',
        latex: '\\mathrm{m}'
      }
    } ],
    name: {
      en: [ 'meter', 'meters' ],
      de: [ 'Meter' ]
    },
    description: {
      en: 'SI base unit of length',
      de: 'SI-Basiseinheit der Länge'
    }
  }
} ) as const satisfies UnitDef< LengthDim, typeof meter >;
