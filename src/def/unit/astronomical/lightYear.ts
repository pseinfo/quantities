import type { LengthDim } from '../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../types/unit';

export const lightYear = 'ly' as UnitRef< LengthDim, 'ly' >;

export default ( {
  id: lightYear,
  dim: [ 0, 1, 0, 0, 0, 0, 0 ],
  structure: [],
  conversion: {
    factor: 9.4607304725808e15
  },
  prefixable: false,
  unitSystem: [ 'astronomical' ],
  category: [ 'accepted' ],
  aliases: [ 'light year', 'light years' ],
  meta: {
    symbol: {
      default: [ {
        context: 'standard',
        ascii: 'ly',
        latex: '\\mathrm{ly}'
      } ],
      localized: {
        de: [ {
          context: 'standard',
          ascii: 'Lj',
          latex: '\\mathrm{Lj}'
        } ]
      }
    },
    name: {
      en: [ 'light year', 'light years' ],
      de: [ 'Lichtjahr', 'Lichtjahre' ]
    },
    description: {
      en: 'accepted unit of length; distance traveled by light in vacuum in one Julian year',
      de: 'akzeptierte Längeneinheit; Entfernung, die Licht im Vakuum in einem Julianischen Jahr zurücklegt'
    }
  }
} ) as const satisfies UnitDef< LengthDim, typeof lightYear >;
