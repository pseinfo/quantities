import { UnitSystem } from '../../const';
import type { Unit, UnitId } from '../../types';

export default ( {
  id: 'min' as UnitId,
  dim: [ 1, 0, 0, 0, 0, 0, 0 ],
  structure: [],
  conversion: {
    factor: 60
  },
  prefixable: false,
  unitSystem: [
    UnitSystem.COMMON
  ],
  meta: {
    symbol: 'min',
    latex: '\\mathrm{min}',
    name: {
      en: 'Minute',
      de: 'Minute'
    }
  }
} ) as const satisfies Unit;
