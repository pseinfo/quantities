import type { Unit, UnitId } from '../../types';

export default ( {
  id: 'C' as UnitId,
  dim: [ 1, 0, 0, 1, 0, 0, 0 ],
  structure: [ {
    unit: 'A' as UnitId,
    exponent: 1
  }, {
    unit: 's' as UnitId,
    exponent: 1
  } ],
  conversion: {
    scale: 1
  },
  prefixable: true,
  meta: {
    symbol: 'C',
    latex: '\\mathrm{C}',
    name: {
      en: 'Coulomb',
      de: 'Coulomb'
    }
  }
} ) as const satisfies Unit;
