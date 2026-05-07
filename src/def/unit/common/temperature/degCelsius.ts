import type { TemperatureDim } from '../../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../../types/unit';

export const degC = 'degC' as UnitRef< TemperatureDim, 'degC' >;

export default ( {
  id: degC,
  dim: [ 0, 0, 0, 0, 1, 0, 0 ],
  structure: [],
  conversion: {
    scale: 1,
    offset: 273.15
  },
  prefixable: false,
  unitSystem: [ 'common' ],
  category: [ 'non_si' ],
  aliases: [ '°C', 'degree celsius', 'celcius' ],
  meta: {
    symbol: {
      default: {
        ascii: '°C',
        unicode: '℃',
        latex: '\\mathrm{^{\\circ}C}'
      }
    },
    name: {
      en: [ 'Celsius' ],
      de: [ 'Grad Celsius' ]
    },
    description: {
      en: 'unit of temperature; defined as 1/100 of the difference between the freezing and boiling points of water at standard atmospheric pressure',
      de: 'Temperatureinheit; definiert als 1/100 der Differenz zwischen dem Gefrier- und Siedepunkt von Wasser bei Normaldruck'
    }
  }
} ) as const satisfies UnitDef< TemperatureDim, typeof degC >;
