import { UnitSystem } from '../../const';
import type { Unit, UnitId } from '../../types';

export default ( {
  id: 'year' as UnitId,
  dim: [ 1, 0, 0, 0, 0, 0, 0 ],
  structure: [],
  conversion: {
    factor: 31557600
  },
  prefixable: false,
  unitSystem: [
    UnitSystem.COMMON
  ],
  meta: {
    symbol: 'a',
    latex: '\\mathrm{a}',
    name: {
      en: 'Year',
      de: 'Jahr'
    }
  }
} ) as const satisfies Unit;
