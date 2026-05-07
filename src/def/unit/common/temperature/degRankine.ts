import type { TemperatureDim } from '../../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../../types/unit';

export const degR = 'degR' as UnitRef< TemperatureDim, 'degR' >;

export default ( {
  id: degR,
  dim: [ 0, 0, 0, 0, 1, 0, 0 ],
  structure: [],
  conversion: {
    scale: 5 / 9,
    offset: 0
  },
  prefixable: false,
  unitSystem: [ 'common' ],
  category: [ 'non_si' ],
  aliases: [ '°R', 'degree rankine', 'rankine' ],
  meta: {
    symbol: {
      default: {
        ascii: '°R',
        latex: '\\mathrm{^{\\circ}R}'
      }
    },
    name: {
      en: [ 'Rankine' ],
      de: [ 'Grad Rankine' ]
    },
    description: {
      en: 'unit of temperature; defined as 1/180 of the difference between the freezing and boiling points of water at standard atmospheric pressure, with the freezing point of water at 491.67 °R and the boiling point at 671.67 °R',
      de: 'Temperatureinheit; definiert als 1/180 der Differenz zwischen dem Gefrier- und Siedepunkt von Wasser bei Normaldruck, wobei der Gefrierpunkt von Wasser bei 491,67 °R und der Siedepunkt bei 671,67 °R liegt'
    }
  }
} ) as const satisfies UnitDef< TemperatureDim, typeof degR >;
