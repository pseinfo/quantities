import type { TemperatureDim } from '../../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../../types/unit';

export const degF = 'degF' as UnitRef< TemperatureDim, 'degF' >;

export default ( {
  id: degF,
  dim: [ 0, 0, 0, 0, 1, 0, 0 ],
  structure: [],
  conversion: {
    scale: 5 / 9,
    offset: 255.372222
  },
  prefixable: false,
  unitSystem: [ 'common' ],
  category: [ 'non_si' ],
  aliases: [ '°F', 'degree fahrenheit', 'fahrenheit' ],
  meta: {
    symbol: {
      default: {
        ascii: '°F',
        unicode: '℉',
        latex: '\\mathrm{^{\\circ}F}'
      }
    },
    name: {
      en: [ 'Fahrenheit' ],
      de: [ 'Grad Fahrenheit' ]
    },
    description: {
      en: 'unit of temperature; defined as 1/180 of the difference between the freezing and boiling points of water at standard atmospheric pressure, with the freezing point of water at 32 °F and the boiling point at 212 °F',
      de: 'Temperatureinheit; definiert als 1/180 der Differenz zwischen dem Gefrier- und Siedepunkt von Wasser bei Normaldruck, wobei der Gefrierpunkt von Wasser bei 32 °F und der Siedepunkt bei 212 °F liegt'
    }
  }
} ) as const satisfies UnitDef< TemperatureDim, typeof degF >;
