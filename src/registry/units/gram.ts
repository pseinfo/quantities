import type { Unit, UnitId } from '../../types';

export default ( {
  id: 'g' as UnitId,
  dim: [ 0, 0, 1, 0, 0, 0, 0 ],
  structure: [ {
    unit: 'g' as UnitId,
    exponent: 1
  } ],
  conversion: {
    scale: 0.001
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
