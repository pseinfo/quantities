import type { LengthDim, TimeDim } from '../../../types/dimension';
import type { UnitDef, UnitId } from '../../../types/unit';

export const lP = 'lP' as UnitId< 'lP' >;

export default ( {
  id: lP,
  dim: [ 0, 1, 0, 0, 0, 0, 0 ],
  structure: [],
  conversion: {
    factor: 1.61625518e-35
  },
  prefixable: false,
  unitSystem: [ 'planck' ],
  aliases: [ 'planck length' ],
  meta: {
    symbol: {
      default: {
        ascii: 'lP',
        latex: 'l_{\\mathrm{P}}'
      }
    },
    name: {
      en: [ 'Planck length' ],
      de: [ 'Planck-Länge' ]
    },
    description: {
      en: 'Smallest meaningful unit of lenght, Planck units.',
      de: 'Kleinste sinnvolle Längeneinheit, Planck-Einheiten.'
    }
  }
} ) as const satisfies UnitDef< LengthDim, typeof lP >;
