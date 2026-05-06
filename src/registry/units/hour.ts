import { UnitSystem } from '../../const';
import type { Unit, UnitId } from '../../types';

export default ( {
  id: 'hour' as UnitId,
  dim: [ 1, 0, 0, 0, 0, 0, 0 ],
  structure: [],
  conversion: {
    factor: 3600
  },
  prefixable: false,
  unitSystem: [
    UnitSystem.COMMON
  ],
  meta: {
    symbol: 'h',
    latex: '\\mathrm{h}',
    name: {
      en: 'Hour',
      de: 'Stunde'
    }
  }
} ) as const satisfies Unit;
