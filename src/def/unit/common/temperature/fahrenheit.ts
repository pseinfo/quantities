import type { TemperatureDim } from '../../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../../types/unit';

import { kelvin } from '../../si/base/kelvin';

export const fahrenheit = 'degF' as UnitRef< TemperatureDim, 'degF' >;

export default ( {
  id: fahrenheit,
  dim: [ 0, 0, 0, 0, 1, 0, 0 ],
  structure: [],
  conversion: {
    base: kelvin,
    scale: 5 / 9,
    offset: 459.67 * 5 / 9
  },
  prefixable: false,
  aliases: [ '°F', 'degree fahrenheit', 'degrees fahrenheit', 'fahrenheit' ],
  context: {
    system: [ 'common', 'imperial', 'usc' ],
    status: 'active'
  },
  meta: {
    symbol: [ {
      id: 'degF',
      canonical: true,
      format: {
        plain: '°F',
        unicode: '℉',
        latex: '\\mathrm{^{\\circ}F}'
      }
    } ],
    name: {
      en: [ 'Fahrenheit' ],
      de: [ 'Grad Fahrenheit' ]
    },
    description: {
      en: 'anglo-american unit of thermodynamic temperature',
      de: 'anglo-amerikanische Einheit der thermodynamischen Temperatur'
    }
  }
} ) as const satisfies UnitDef< TemperatureDim, typeof fahrenheit >;
