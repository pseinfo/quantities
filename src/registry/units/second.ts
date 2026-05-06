import type { Unit, UnitId } from '../../types';

export default ( {
  id: 's' as UnitId,
  dim: [ 1, 0, 0, 0, 0, 0, 0 ],
  structure: [ {
    unit: 's' as UnitId,
    exponent: 1
  } ],
  conversion: {
    scale: 1
  },
  prefixable: true,
  meta: {
    symbol: 's',
    latex: '\\mathrm{s}',
    name: {
      en: 'second',
      de: 'Sekunde'
    }
  }
} ) as const satisfies Unit;
