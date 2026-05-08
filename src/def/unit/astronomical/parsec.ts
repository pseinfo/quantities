import { LengthDim } from '../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../types/unit';

export const parsec = 'pc' as UnitRef< LengthDim, 'pc' >;

export default ( {
  id: parsec,
  dim: [ 0, 1, 0, 0, 0, 0, 0 ],
  structure: [],
  conversion: {
    factor: 9.69394202136e16 / Math.PI
  },
  prefixable: true,
  aliases: [ 'parsec', 'parsecs' ],
  context: {
    system: [ 'astronomical' ],
    status: 'active',
    property: {
      dimensionless: false,
      logarithmic: false
    }
  },
  meta: {
    symbol: [ {
      id: 'pc',
      canonical: true,
      context: {
        system: [ 'astronomical' ]
      },
      format: {
        plain: 'pc',
        latex: '\\mathrm{pc}'
      }
    } ],
    name: {
      en: [ 'parsec', 'parsecs' ],
      de: [ 'Parsec' ]
    },
    description: {
      en: 'astronomical unit of length; parallax of 1 arcsecond at a distance of 1 astronomical unit',
      de: 'astronomische Längeneinheit; Parallaxe von 1 Bogensekunde bei einer Entfernung von 1 Astronomischen Einheit'
    }
  }
} ) as const satisfies UnitDef< LengthDim, typeof parsec >;
