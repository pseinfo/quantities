import type { Unit, UnitId } from '../../types';

export default ( {
  id: 'g' as UnitId,
  dim: [ 0, 0, 1, 0, 0, 0, 0 ],
  structure: [],
  conversion: {
    scale: 1
  },
  prefixable: true,
  meta: {
    symbol: 'g',
    latex: '\\mathrm{g}',
    name: {
      en: 'Gram',
      de: 'Gramm'
    }
  }
} ) as const satisfies Unit;
