import { UnitSystem } from '../../const';
import type { Unit, UnitId } from '../../types';
import ampere from './ampere';
import second from './second';

export default ( {
  id: 'C' as UnitId,
  dim: [ 1, 0, 0, 1, 0, 0, 0 ],
  structure: [ {
    unit: ampere,
    exponent: 1
  }, {
    unit: second,
    exponent: 1
  } ],
  conversion: {
    factor: 1
  },
  prefixable: true,
  unitSystem: [
    UnitSystem.SI
  ],
  meta: {
    symbol: 'C',
    latex: '\\mathrm{C}',
    name: {
      en: 'Coulomb',
      de: 'Coulomb'
    }
  }
} ) as const satisfies Unit;
