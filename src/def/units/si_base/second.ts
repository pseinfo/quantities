import type { UnitDef, UnitId } from '../../../types/unit';

export type s = UnitDef< [ 1, 0, 0, 0, 0, 0, 0 ], 's' >;

export default ( {
  id: 's' as UnitId< 's' >,
  dim: [ 1, 0, 0, 0, 0, 0, 0 ],
  structure: [],
  conversion: 1,
  prefixable: true,
  unitSystem: [ 'si' ],
  aliases: [ 'sec', 'second', 'seconds' ],
  meta: {
    symbol: {
      default: {
        ascii: 's',
        latex: '\\mathrm{s}'
      }
    },
    name: {
      en: [ 'second', 'seconds' ],
      de: [ 'Sekunde', 'Sekunden' ]
    },
    description: {
      en: 'SI base unit of time',
      de: 'SI-Basiseinheit der Zeit'
    },
    category: [ 'base' ]
  }
} ) as const satisfies s;
