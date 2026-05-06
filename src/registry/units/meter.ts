import type { Unit, UnitId } from '../../types';

export default ( {
  id: 'm' as UnitId,
  dim: [ 0, 1, 0, 0, 0, 0, 0 ],
  structure: [ {
    unit: 'm' as UnitId,
    exponent: 1
  } ],
  conversion: {
    scale: 1
  },
  prefixable: true,
  meta: {
    symbol: 'm',
    latex: '\\mathrm{m}',
    name: {
      en: 'meter',
      de: 'Meter'
    }
  }
} ) as const satisfies Unit;
