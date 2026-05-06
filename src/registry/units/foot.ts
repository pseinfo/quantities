import { UnitSystem } from '../../const';
import type { Unit, UnitId } from '../../types';

export default ( {
  id: 'ft' as UnitId,
  dim: [ 0, 1, 0, 0, 0, 0, 0 ],
  structure: [],
  conversion: {
    factor: 0.3048
  },
  prefixable: false,
  unitSystem: [
    UnitSystem.IMPERIAL,
    UnitSystem.USC
  ],
  meta: {
    symbol: 'ft',
    latex: '\\mathrm{ft}',
    name: {
      en: 'Foot',
      de: 'Fuß'
    }
  }
} ) as const satisfies Unit;
