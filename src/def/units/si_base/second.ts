import type { UnitDef, UnitId } from '../../../types/unit';

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
      common: {
        plain: 's',
        latex: '\\mathrm{s}'
      }
    },
    name: {
      en: [ 'second', 'seconds' ],
      de: [ 'Sekunde', 'Sekunden' ]
    }
  }
} ) as const satisfies UnitDef;
