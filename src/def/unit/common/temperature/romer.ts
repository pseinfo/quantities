import type { TemperatureDim } from '../../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../../types/unit';

import { kelvin } from '../../si/base/kelvin';

export const romer = 'degRo' as UnitRef< TemperatureDim, 'degRo' >;

export default ( {
  id: romer,
  dim: [ 0, 0, 0, 0, 1, 0, 0 ],
  structure: [],
  conversion: {
    base: kelvin,
    scale: 40 / 21,
    offset: 273.15 - 7.5 * 40 / 21
  },
  prefixable: false,
  aliases: [ '°Ro', 'degree romer', 'degrees romer', 'romer', 'roemer' ],
  context: {
    system: [ 'common' ],
    status: 'historical'
  },
  meta: {
    symbol: [ {
      id: 'degRo',
      canonical: true,
      format: {
        plain: '°Ro',
        unicode: '°Rø',
        latex: '\\mathrm{^{\\circ}Rø}'
      }
    } ],
    name: {
      en: [ 'Rømer' ],
      de: [ 'Grad Rømer' ]
    },
    description: {
      en: 'historical temperature unit based on water expansion, 0 °Ro = 7.5 °C',
      de: 'historische Temperatureinheit, die auf der Ausdehnung von Wasser basiert, 0 °Ro = 7,5 °C'
    }
  }
} ) as const satisfies UnitDef< TemperatureDim, typeof romer >;
