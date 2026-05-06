import type { Unit, UnitId } from '../../types';
import meter from './meter';

export default ( {
  id: 'in' as UnitId,
  dim: [ 0, 1, 0, 0, 0, 0, 0 ],
  structure: [ {
    unit: meter,
    exponent: 1
  } ],
  conversion: {
    factor: 0.0254
  },
  prefixable: false,
  meta: {
    symbol: 'in',
    latex: '\\mathrm{in}',
    name: {
      en: 'Inch',
      de: 'Zoll'
    }
  }
} ) as const satisfies Unit;
