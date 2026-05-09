import type { TemperatureDim } from '../../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../../types/unit';

export const fahrenheit = 'degF' as UnitRef< TemperatureDim, 'degF' >;

export default ( {
  id: fahrenheit,
  dim: [ 0, 0, 0, 0, 1, 0, 0 ],
  structure: [],
  conversion: {
    scale: 5 / 9,
    offset: 255.3722222222222
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
      context: {
        system: [ 'common', 'imperial', 'usc' ]
      },
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
