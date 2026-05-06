import { UnitSystem } from '../../../const';
import type { Unit, UnitId } from '../../../types';
import meter from '../meter';

export default ( {
  id: 'lP' as UnitId,
  dim: [ 0, 1, 0, 0, 0, 0, 0 ],
  structure: [ {
    unit: meter,
    exponent: 1
  } ],
  conversion: {
    factor: 1.61625518e-35
  },
  prefixable: false,
  unitSystem: [
    UnitSystem.PLANCK
  ],
  meta: {
    symbol: 'lP',
    latex: 'l_{\\mathrm{P}}',
    name: {
      en: 'Planck length',
      de: 'Planck-Länge'
    }
  }
} ) as const satisfies Unit;
