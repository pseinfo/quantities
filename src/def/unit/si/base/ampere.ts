import type { ElectricCurrentDim } from '../../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../../types/unit';

export const ampere = 'A' as UnitRef< ElectricCurrentDim, 'A' >;

export default ( {
  id: ampere,
  dim: [ 0, 0, 0, 1, 0, 0, 0 ],
  structure: [],
  conversion: 1,
  prefixable: true,
  aliases: [ 'ampere', 'amperes' ],
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
      id: 'A',
      canonical: true,
      context: {
        system: [ 'si' ]
      },
      format: {
        plain: 'A',
        latex: '\\mathrm{A}'
      }
    } ],
    name: {
      en: [ 'ampere', 'amperes' ],
      de: [ 'Ampere' ]
    },
    description: {
      en: 'SI base unit of electric current',
      de: 'SI-Basiseinheit der elektrischen Stromstärke'
    }
  }
} ) as const satisfies UnitDef< ElectricCurrentDim, typeof ampere >;
