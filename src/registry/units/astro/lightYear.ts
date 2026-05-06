import { UnitSystem } from '../../../const';
import type { Unit, UnitId } from '../../../types';
import meter from '../meter';

export default ( {
  id: 'ly' as UnitId,
  dim: [ 0, 1, 0, 0, 0, 0, 0 ],
  structure: [ {
    unit: meter,
    exponent: 1
  } ],
  conversion: {
    factor: 9.4607304725808e15
  },
  prefixable: false,
  unitSystem: [
    UnitSystem.ASTRO
  ],
  meta: {
    symbol: 'ly',
    latex: '\\mathrm{ly}',
    name: {
      en: 'Light-year',
      de: 'Lichtjahr'
    }
  }
} ) as const satisfies Unit;
