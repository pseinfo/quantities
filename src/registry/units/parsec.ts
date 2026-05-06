import { UnitSystem } from '../../const';
import type { Unit, UnitId } from '../../types';
import meter from './meter';

export default ( {
  id: 'pc' as UnitId,
  dim: [ 0, 1, 0, 0, 0, 0, 0 ],
  structure: [ {
    unit: meter,
    exponent: 1
  } ],
  conversion: {
    factor: 648000 / Math.PI * 149597870700
  },
  prefixable: false,
  unitSystem: [
    UnitSystem.ASTRO
  ],
  meta: {
    symbol: 'pc',
    latex: '\\mathrm{pc}',
    name: {
      en: 'Parsec',
      de: 'Parsec'
    }
  }
} ) as const satisfies Unit;
