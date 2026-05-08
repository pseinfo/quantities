import type { MassDim } from '../../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../../types/unit';

export const gram = 'g' as UnitRef< MassDim, 'g' >;

export default ( {
  id: gram,
  dim: [ 0, 0, 1, 0, 0, 0, 0 ],
  structure: [],
  conversion: 1,
  prefixable: true,
  aliases: [ 'gram', 'grams' ],
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
      id: 'g',
      canonical: true,
      context: {
        system: [ 'si' ]
      },
      format: {
        plain: 'g',
        latex: '\\mathrm{g}'
      }
    } ],
    name: {
      en: [ 'gram', 'grams' ],
      de: [ 'Gramm' ]
    },
    description: {
      en: 'SI base unit of mass, declared as gram for arithmetical convenience',
      de: 'SI-Basiseinheit der Masse, aus arithmetischen Gründen als Gramm deklariert'
    }
  }
} ) as const satisfies UnitDef< MassDim, typeof gram >;
