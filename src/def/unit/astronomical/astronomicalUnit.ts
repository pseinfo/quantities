import { LengthDim } from '../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../types/unit';

export const astronomicalUnit = 'au' as UnitRef< LengthDim, 'au' >;

export default ( {
  id: astronomicalUnit,
  dim: [ 0, 1, 0, 0, 0, 0, 0 ],
  structure: [],
  conversion: {
    factor: 1.495978707e11
  },
  prefixable: false,
  aliases: [ 'AU', 'astronomical unit', 'astronomical units' ],
  context: {
    system: [ 'astronomical' ],
    si: 'accepted',
    status: 'active'
  },
  meta: {
    symbol: [ {
      id: 'au',
      canonical: true,
      context: {
        system: [ 'astronomical' ]
      },
      format: {
        plain: 'au',
        latex: '\\mathrm{au}'
      }
    }, {
      id: 'AU',
      context: {
        system: [ 'astronomical' ]
      },
      format: {
        plain: 'AU',
        latex: '\\mathrm{AU}'
      }
    }, {
      id: 'AE',
      context: {
        system: [ 'astronomical' ],
        lang: 'de'
      },
      format: {
        plain: 'AE',
        latex: '\\mathrm{AE}'
      }
    } ],
    name: {
      en: [ 'astronomical unit', 'astronomical units' ],
      de: [ 'Astronomische Einheit', 'Astronomische Einheiten' ]
    },
    description: {
      en: 'astronomical unit of length; mean distance between the Earth and the Sun',
      de: 'astronomische Längeneinheit; mittlere Entfernung zwischen Erde und Sonne'
    }
  }
} ) as const satisfies UnitDef< LengthDim, typeof astronomicalUnit >;
