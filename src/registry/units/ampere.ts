import type { Unit, UnitId } from '../../types';

export default ( {
  id: 'A' as UnitId,
  dim: [ 0, 0, 0, 1, 0, 0, 0 ],
  structure: [],
  conversion: {
    scale: 1
  },
  prefixable: true,
  meta: {
    symbol: 'A',
    latex: '\\mathrm{A}',
    name: {
      en: 'Ampere',
      de: 'Ampere'
    }
  }
} ) as const satisfies Unit;
