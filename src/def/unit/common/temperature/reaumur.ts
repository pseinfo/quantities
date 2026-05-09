import type { TemperatureDim } from '../../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../../types/unit';

import { kelvin } from '../../si/base/kelvin';

export const reaumur = 'degRe' as UnitRef< TemperatureDim, 'degRe' >;

export default ( {
  id: reaumur,
  dim: [ 0, 0, 0, 0, 1, 0, 0 ],
  structure: [],
  conversion: {
    base: kelvin,
    scale: 5 / 4,
    offset: 273.15
  },
  prefixable: false,
  aliases: [ '°Re', '°r', 'degree reaumur', 'degrees reaumur', 'reaumur' ],
  context: {
    system: [ 'common' ],
    status: 'historical'
  },
  meta: {
    symbol: [ {
      id: 'degRe',
      canonical: true,
      format: {
        plain: '°Re',
        unicode: '°Ré',
        latex: '\\mathrm{^{\\circ}R\\acute{e}}'
      }
    }, {
      id: 'degr',
      format: {
        plain: '°r',
        latex: '\\mathrm{^{\\circ}r}'
      }
    } ],
    name: {
      en: [ 'Réaumur' ],
      de: [ 'Grad Réaumur' ]
    },
    description: {
      en: 'historical temperature unit based on expansion of ethanol',
      de: 'historische Temperatureinheit, die auf der Ausdehnung von Ethanol basiert'
    }
  }
} ) as const satisfies UnitDef< TemperatureDim, typeof reaumur >;
