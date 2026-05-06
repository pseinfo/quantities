import { UnitSystem } from '../../const';
import type { Unit, UnitId } from '../../types';
import meter from './meter';

export default ( {
  id: 'au' as UnitId,
  dim: [ 0, 1, 0, 0, 0, 0, 0 ],
  structure: [ {
    unit: meter,
    exponent: 1
  } ],
  conversion: {
    factor: 149597870700
  },
  prefixable: false,
  unitSystem: [
    UnitSystem.ASTRO
  ],
  meta: {
    symbol: 'au',
    latex: '\\mathrm{au}',
    name: {
      en: 'Astronomical unit',
      de: 'Astronomische Einheit'
    }
  }
} ) as const satisfies Unit;
