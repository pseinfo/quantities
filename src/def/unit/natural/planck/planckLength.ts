import type { LengthDim } from '../../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../../types/unit';

export const planckLength = 'lP' as UnitRef< LengthDim, 'lP' >;

export default ( {
  id: planckLength,
  dim: [ 0, 1, 0, 0, 0, 0, 0 ],
  structure: [],
  conversion: {
    factor: 1.61625518e-35
  },
  prefixable: false,
  unitSystem: [ 'natural', 'natural/planck' ],
  aliases: [ 'planck length' ],
  meta: {
    symbol: {
      default: [ {
        context: 'standard',
        ascii: 'lP',
        unicode: 'lₚ',
        latex: 'l_{\\mathrm{P}}'
      } ]
    },
    name: {
      en: [ 'Planck length' ],
      de: [ 'Planck-Länge' ]
    },
    description: {
      en: 'Smallest meaningful unit of length; Planck units',
      de: 'Kleinste sinnvolle Längeneinheit; Planck-Einheiten'
    }
  }
} ) as const satisfies UnitDef< LengthDim, typeof planckLength >;
