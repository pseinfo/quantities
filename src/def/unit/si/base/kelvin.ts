import type { TemperatureDim } from '../../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../../types/unit';

export const kelvin = 'K' as UnitRef< TemperatureDim, 'K' >;

export default ( {
  id: kelvin,
  dim: [ 0, 0, 0, 0, 1, 0, 0 ],
  structure: [],
  conversion: 1,
  prefixable: true,
  aliases: [ 'kelvin' ],
  context: {
    system: [ 'si' ],
    kind: 'base',
    status: 'active'
  },
  meta: {
    symbol: [ {
      id: 'K',
      canonical: true,
      context: {
        system: [ 'si' ]
      },
      format: {
        plain: 'K',
        latex: '\\mathrm{K}'
      }
    } ],
    name: {
      en: [ 'Kelvin' ],
      de: [ 'Kelvin' ]
    },
    description: {
      en: 'SI base unit of thermodynamic temperature',
      de: 'SI-Basiseinheit der thermodynamischen Temperatur'
    }
  }
} ) as const satisfies UnitDef< TemperatureDim, typeof kelvin >;
