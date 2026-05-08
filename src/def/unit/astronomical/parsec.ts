import type { LengthDim } from '../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../types/unit';

export const parsec = 'pc' as UnitRef< LengthDim, 'pc' >;

export default ( {
  id: parsec,
  dim: [ 0, 1, 0, 0, 0, 0, 0 ],
  structure: [],
  conversion: {
    factor: 3.085677581491367e16
  },
  prefixable: true,
  unitSystem: [ 'astronomical' ],
  category: [ 'accepted' ],
  aliases: [ 'parsec', 'parsecs' ],
  meta: {
    symbol: {
      default: [ {
        context: 'standard',
        ascii: 'pc',
        latex: '\\mathrm{pc}'
      } ]
    },
    name: {
      en: [ 'parsec', 'parsecs' ],
      de: [ 'Parsec', 'Parsecs' ]
    },
    description: {
      en: 'accepted unit of length; parallax of 1 arcsecond at a distance of 1 astronomical unit',
      de: 'akzeptierte Längeneinheit; Parallaxe von 1 Bogensekunde bei einer Entfernung von 1 Astronomischen Einheit'
    }
  }
} ) as const satisfies UnitDef< LengthDim, typeof parsec >;
