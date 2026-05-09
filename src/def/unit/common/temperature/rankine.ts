import type { TemperatureDim } from '../../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../../types/unit';

import { kelvin } from '../../si/base/kelvin';

export const rankine = 'degRa' as UnitRef< TemperatureDim, 'degRa' >;

export default ( {
  id: rankine,
  dim: [ 0, 0, 0, 0, 1, 0, 0 ],
  structure: [],
  conversion: {
    base: kelvin,
    scale: 5 / 9,
    offset: 0
  },
  prefixable: false,
  aliases: [ '°Ra', 'degree rankine', 'degrees rankine', 'rankine' ],
  context: {
    system: [ 'common', 'imperial', 'usc' ],
    status: 'historical'
  },
  meta: {
    symbol: [ {
      id: 'degRa',
      canonical: true,
      format: {
        plain: '°Ra',
        latex: '\\mathrm{^{\\circ}Ra}'
      }
    }, {
      id: 'degR',
      deprecated: true,
      format: {
        plain: '°R',
        latex: '\\mathrm{^{\\circ}R}'
      }
    } ],
    name: {
      en: [ 'Rankine' ],
      de: [ 'Grad Rankine' ]
    },
    description: {
      en: 'Rankine scale, absolute temperature scale using degree Fahrenheit as unit increment, 0 °Ra = 0 K',
      de: 'Rankine-Skala, absolute Temperaturskala mit Grad Fahrenheit als Einheitsgröße, 0 °Ra = 0 K'
    }
  }
} ) as const satisfies UnitDef< TemperatureDim, typeof rankine >;
