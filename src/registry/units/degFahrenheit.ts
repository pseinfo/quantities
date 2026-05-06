import type { Unit, UnitId } from '../../types';

export default ( {
  id: 'degF' as UnitId,
  dim: [ 0, 0, 0, 0, 1, 0, 0 ],
  structure: [ {
    unit: 'K' as UnitId,
    exponent: 1
  } ],
  conversion: {
    scale: 5/9,
    offset: 255.372222
  },
  prefixable: false,
  meta: {
    symbol: '°F',
    latex: '\\mathrm{^{\\circ}F}',
    name: {
      en: 'Fahrenheit',
      de: 'Grad Fahrenheit'
    }
  }
} ) as const satisfies Unit;
