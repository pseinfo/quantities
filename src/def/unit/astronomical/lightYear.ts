import { LengthDim } from '../../../types/dimension';
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
  aliases: [ 'lyr', 'light year', 'light years' ],
  context: {
    system: [ 'astronomical' ],
    status: 'active'
  },
  meta: {
    symbol: [ {
      id: 'ly',
      canonical: true,
      context: {
        system: [ 'astronomical' ]
      },
      format: {
        plain: 'ly',
        latex: '\\mathrm{ly}'
      }
    }, {
      id: 'lyr',
      context: {
        system: [ 'astronomical' ]
      },
      format: {
        plain: 'lyr',
        latex: '\\mathrm{lyr}'
      }
    }, {
      id: 'Lj',
      context: {
        system: [ 'astronomical' ],
        lang: 'de'
      },
      format: {
        plain: 'Lj',
        latex: '\\mathrm{Lj}'
      }
    } ],
    name: {
      en: [ 'light year', 'light years' ],
      de: [ 'Lichtjahr', 'Lichtjahre' ]
    },
    description: {
      en: 'astronomical unit of length; distance traveled by light in vacuum in one Julian year',
      de: 'astronomische Längeneinheit; Entfernung, die Licht im Vakuum in einem Julianischen Jahr zurücklegt'
    }
  }
} ) as const satisfies UnitDef< LengthDim, typeof lightYear >;
