import type { TemperatureDim } from '../../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../../types/unit';

export const delisle = 'degDe' as UnitRef< TemperatureDim, 'degDe' >;

export default ( {
  id: delisle,
  dim: [ 0, 0, 0, 0, 1, 0, 0 ],
  structure: [],
  conversion: {
    scale: -2 / 3,
    offset: 373.15
  },
  prefixable: false,
  aliases: [ '°De', 'degree delisle', 'degrees delisle', 'delisle' ],
  context: {
    system: [ 'common' ],
    status: 'historical'
  },
  meta: {
    symbol: [ {
      id: 'degDe',
      canonical: true,
      context: {
        system: [ 'common' ]
      },
      format: {
        plain: '°De',
        latex: '\\mathrm{^{\\circ}De}'
      }
    } ],
    name: {
      en: [ 'Delisle' ],
      de: [ 'Grad Delisle' ]
    },
    description: {
      en: 'historical temperature unit with inverted scale where 0 °De = 100 °C and 150 °De = 0 °C',
      de: 'historische Temperatureinheit mit invertierter Skala, bei der 0 °De = 100 °C und 150 °De = 0 °C ist'
    }
  }
} ) as const satisfies UnitDef< TemperatureDim, typeof delisle >;
