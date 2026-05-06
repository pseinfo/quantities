import { UnitSystem } from '../../const';
import type { Unit, UnitId } from '../../types';

export default ( {
  id: 'day' as UnitId,
  dim: [ 1, 0, 0, 0, 0, 0, 0 ],
  structure: [],
  conversion: {
    factor: 86400
  },
  prefixable: false,
  unitSystem: [
    UnitSystem.COMMON
  ],
  meta: {
    symbol: 'd',
    latex: '\\mathrm{d}',
    name: {
      en: 'Day',
      de: 'Tag'
    }
  }
} ) as const satisfies Unit;
