import { UnitSystem } from '../../const';
import type { Unit, UnitId } from '../../types';
import meter from './meter';

export default ( {
  id: 'yd' as UnitId,
  dim: [ 0, 1, 0, 0, 0, 0, 0 ],
  structure: [ {
    unit: meter,
    exponent: 1
  } ],
  conversion: {
    factor: 0.9144
  },
  prefixable: false,
  unitSystem: [
    UnitSystem.IMPERIAL,
    UnitSystem.USC
  ],
  meta: {
    symbol: 'yd',
    latex: '\\mathrm{yd}',
    name: {
      en: 'Yard',
      de: 'Yard'
    }
  }
} ) as const satisfies Unit;
