import type { Unit, UnitId } from '../../types';

export default ( {
  id: 's' as UnitId,
  dim: [ 1, 0, 0, 0, 0, 0, 0 ],
  structure: [ {
    unit: 'self',
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
      en: 'Second',
      de: 'Sekunde'
    }
  }
} ) as const satisfies Unit;
