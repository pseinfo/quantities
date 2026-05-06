import type { Unit, UnitId } from '../../types';

export default ( {
  id: 'K' as UnitId,
  dim: [ 0, 0, 0, 0, 1, 0, 0 ],
  structure: [ {
    unit: 'self',
    exponent: 1
  } ],
  conversion: {
    scale: 1
  },
  prefixable: false,
  meta: {
    symbol: 'K',
    latex: '\\mathrm{K}',
    name: {
      en: 'Kelvin',
      de: 'Kelvin'
    }
  }
} ) as const satisfies Unit;
