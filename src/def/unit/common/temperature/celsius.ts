import type { TemperatureDim } from '../../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../../types/unit';

export const celsius = 'degC' as UnitRef< TemperatureDim, 'degC' >;

export default ( {
  id: celsius,
  dim: [ 0, 0, 0, 0, 1, 0, 0 ],
  structure: [],
  conversion: {
    scale: 1,
    offset: 273.15
  },
  prefixable: false,
  aliases: [ '°C', 'degree celsius', 'degrees celsius', 'celsius' ],
  context: {
    system: [ 'common' ],
    status: 'active'
  },
  meta: {
    symbol: [ {
      id: 'degC',
      canonical: true,
      context: {
        system: [ 'common' ]
      },
      format: {
        plain: '°C',
        unicode: '℃',
        latex: '\\mathrm{^{\\circ}C}'
      }
    } ],
    name: {
      en: [ 'Celcius' ],
      de: [ 'Grad Celsius' ]
    },
    description: {
      en: 'accepted unit of thermodynamic temperature, defined by triple point of water, 0 °C = 273.15 K',
      de: 'akzeptierte Einheit der thermodynamischen Temperatur, definiert durch den Tripelpunkt des Wassers, 0 °C = 273,15 K'
    }
  }
} ) as const satisfies UnitDef< TemperatureDim, typeof celsius >;
