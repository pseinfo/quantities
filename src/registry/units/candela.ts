import type { Unit, UnitId } from '../../types';

export default ( {
  id: 'cd' as UnitId,
  dim: [ 0, 0, 0, 0, 0, 0, 1 ],
  structure: [ {
    unit: 'cd' as UnitId,
    exponent: 1
  } ],
  conversion: {
    scale: 1
  },
  prefixable: false,
  meta: {
    symbol: 'cd',
    latex: '\\mathrm{cd}',
    name: {
      en: 'Candela',
      de: 'Candela'
    }
  }
} ) as const satisfies Unit;
