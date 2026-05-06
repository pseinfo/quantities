import type { Unit, UnitId } from '../../types';

export default ( {
  id: 'degC' as UnitId,
  dim: [ 0, 0, 0, 0, 1, 0, 0 ],
  structure: [ {
    unit: 'K' as UnitId,
    exponent: 1
  } ],
  conversion: {
    scale: 1,
    offset: 273.15
  },
  prefixable: false,
  meta: {
    symbol: '°C',
    latex: '\\mathrm{^{\\circ}C}',
    name: {
      en: 'Celsius',
      de: 'Grad Celsius'
    }
  }
} ) as const satisfies Unit;
