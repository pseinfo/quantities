import { UnitSystem } from '../../const';
import type { Unit, UnitId } from '../../types';

export default ( {
  id: 'degF' as UnitId,
  dim: [ 0, 0, 0, 0, 1, 0, 0 ],
  structure: [],
  conversion: {
    scale: 5/9,
    offset: 255.372222
  },
  prefixable: false,
  unitSystem: [
    UnitSystem.USC
  ],
  meta: {
    symbol: '°F',
    latex: '\\mathrm{^{\\circ}F}',
    name: {
      en: 'Fahrenheit',
      de: 'Grad Fahrenheit'
    }
  }
} ) as const satisfies Unit;
