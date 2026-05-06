import { UnitSystem } from '../../const';
import type { Unit, UnitId } from '../../types';

export default ( {
  id: 'cd' as UnitId,
  dim: [ 0, 0, 0, 0, 0, 0, 1 ],
  structure: [],
  conversion: {
    factor: 1
  },
  prefixable: false,
  unitSystem: [
    UnitSystem.SI
  ],
  meta: {
    symbol: 'cd',
    latex: '\\mathrm{cd}',
    name: {
      en: 'Candela',
      de: 'Candela'
    }
  }
} ) as const satisfies Unit;
