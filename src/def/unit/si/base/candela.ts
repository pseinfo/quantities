import type { LuminousIntensityDim } from '../../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../../types/unit';

export const candela = 'cd' as UnitRef< LuminousIntensityDim, 'cd' >;

export default ( {
  id: candela,
  dim: [ 0, 0, 0, 0, 0, 0, 1 ],
  structure: [],
  conversion: 1,
  prefixable: true,
  aliases: [ 'candela', 'candelas' ],
  context: {
    system: [ 'si' ],
    kind: 'base',
    status: 'active',
    property: {
      dimensionless: false,
      logarithmic: false
    }
  },
  meta: {
    symbol: [ {
      id: 'cd',
      canonical: true,
      context: {
        system: [ 'si' ]
      },
      format: {
        plain: 'cd',
        latex: '\\mathrm{cd}'
      }
    } ],
    name: {
      en: [ 'candela', 'candelas' ],
      de: [ 'Candela' ]
    },
    description: {
      en: 'SI base unit of luminous intensity',
      de: 'SI-Basiseinheit der Lichtstärke'
    }
  }
} ) as const satisfies UnitDef< LuminousIntensityDim, typeof candela >;
