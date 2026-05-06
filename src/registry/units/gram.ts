import { UnitSystem } from '../../const';
import type { Unit, UnitId } from '../../types';

export default ( {
  id: 'g' as UnitId,
  dim: [ 0, 0, 1, 0, 0, 0, 0 ],
  structure: [],
  conversion: {
    factor: 1
  },
  prefixable: true,
  unitSystem: [
    UnitSystem.SI
  ],
  meta: {
    symbol: 'g',
    latex: '\\mathrm{g}',
    name: {
      en: 'Gram',
      de: 'Gramm'
    }
  }
} ) as const satisfies Unit;
