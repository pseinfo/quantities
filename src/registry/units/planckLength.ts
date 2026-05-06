import { UnitSystem } from '../../const';
import type { Unit, UnitId } from '../../types';

export default ( {
  id: 'lP' as UnitId,
  dim: [ 0, 1, 0, 0, 0, 0, 0 ],
  structure: [],
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
