import type { TemperatureDim } from '../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../types/unit';

export const K = 'K' as UnitRef< TemperatureDim, 'K' >;

export default ( {
  id: K,
  dim: [ 0, 0, 0, 0, 1, 0, 0 ],
  structure: [],
  conversion: 1,
  prefixable: false,
  unitSystem: [ 'si' ],
  category: [ 'base' ],
  aliases: [ 'kelvin' ],
  meta: {
    symbol: {
      default: {
        ascii: 'K',
        latex: '\\mathrm{K}'
      }
    },
    name: {
      en: [ 'Kelvin' ],
      de: [ 'Kelvin' ]
    },
    description: {
      en: 'SI base unit of temperature',
      de: 'SI-Basiseinheit der Temperatur'
    }
  }
} ) as const satisfies UnitDef< TemperatureDim, typeof K >;
