import type { TemperatureDim } from '../../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../../types/unit';

import { kelvin } from '../../si/base/kelvin';

export const leiden = 'degL' as UnitRef< TemperatureDim, 'degL' >;

export default ( {
  id: leiden,
  dim: [ 0, 0, 0, 0, 1, 0, 0 ],
  structure: [],
  conversion: {
    base: kelvin,
    scale: 1,
    offset: 20.15
  },
  prefixable: false,
  aliases: [ '°L', 'DL', 'degree leiden', 'degrees leiden', 'leiden' ],
  context: {
    system: [ 'common' ],
    status: 'historical'
  },
  meta: {
    symbol: [ {
      id: 'degL',
      canonical: true,
      format: {
        plain: '°L',
        latex: '\\mathrm{^{\\circ}L}'
      }
    }, {
      id: 'DL',
      format: {
        plain: 'DL',
        unicode: 'ÐL',
        latex: '\\mathrm{ÐL}'
      }
    } ],
    name: {
      en: [ 'Leiden' ],
      de: [ 'Grad Leiden' ]
    },
    description: {
      en: 'historical temperature unit used in cryogenics, 0 °L = 20.15 K',
      de: 'historische Temperatureinheit, die in der Kryotechnik verwendet wird, 0 °L = 20,15 K'
    }
  }
} ) as const satisfies UnitDef< TemperatureDim, typeof leiden >;
