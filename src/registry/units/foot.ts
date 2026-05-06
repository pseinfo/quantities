import type { Unit, UnitId } from '../../types';
import meter from './meter';

export default ( {
  id: 'ft' as UnitId,
  dim: [ 0, 1, 0, 0, 0, 0, 0 ],
  structure: [ {
    unit: meter,
    exponent: 1
  } ],
  conversion: {
    factor: 0.3048
  },
  prefixable: false,
  meta: {
    symbol: 'ft',
    latex: '\\mathrm{ft}',
    name: {
      en: 'Foot',
      de: 'Fuß'
    }
  }
} ) as const satisfies Unit;
