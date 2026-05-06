import { UnitSystem } from '../../../const';
import type { Unit, UnitId } from '../../../types';

export default ( {
  id: 'tP' as UnitId,
  dim: [ 1, 0, 0, 0, 0, 0, 0 ],
  structure: [],
  conversion: {
    factor: 5.39124760e-44
  },
  prefixable: false,
  unitSystem: [
    UnitSystem.PLANCK
  ],
  meta: {
    symbol: 'tP',
    latex: 't_{\\mathrm{P}}',
    name: {
      en: 'Planck time',
      de: 'Planck-Zeit'
    }
  }
} ) as const satisfies Unit;
