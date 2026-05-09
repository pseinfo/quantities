import type { AmountOfSubstanceDim } from '../../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../../types/unit';

export const mole = 'mol' as UnitRef< AmountOfSubstanceDim, 'mol' >;

export default ( {
  id: mole,
  dim: [ 0, 0, 0, 0, 0, 1, 0 ],
  structure: [],
  conversion: 1,
  prefixable: true,
  aliases: [ 'mole', 'moles' ],
  context: {
    system: [ 'si' ],
    si: 'base',
    status: 'active'
  },
  meta: {
    symbol: [ {
      id: 'mol',
      canonical: true,
      context: {
        system: [ 'si' ]
      },
      format: {
        plain: 'mol',
        latex: '\\mathrm{mol}'
      }
    } ],
    name: {
      en: [ 'mole', 'moles' ],
      de: [ 'Mol' ]
    },
    description: {
      en: 'SI base unit of the amount of substance',
      de: 'SI-Basiseinheit der Stoffmenge'
    }
  }
} ) as const satisfies UnitDef< AmountOfSubstanceDim, typeof mole >;
