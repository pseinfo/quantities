import type { LengthDim } from '../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../types/unit';

export const astroUnit = 'au' as UnitRef< LengthDim, 'au' >;

export default ( {
  id: astroUnit,
  dim: [ 0, 1, 0, 0, 0, 0, 0 ],
  structure: [],
  conversion: {
    factor: 149597870700
  },
  prefixable: false,
  unitSystem: [ 'astronomical' ],
  category: [ 'accepted' ],
  aliases: [ 'astronomical unit' ],
  meta: {
    symbol: {
      default: [ {
        context: 'standard',
        ascii: 'au',
        latex: '\\mathrm{au}'
      }, {
        context: 'alternative',
        ascii: 'AU',
        latex: '\\mathrm{AU}'
      } ],
      localized: {
        de: [ {
          context: 'standard',
          ascii: 'AE',
          latex: '\\mathrm{AE}'
        }, {
          context: 'alternative',
          ascii: 'ae',
          latex: '\\mathrm{ae}'
        } ]
      }
    },
    name: {
      en: [ 'astronomical unit', 'astronomical units' ],
      de: [ 'Astronomische Einheit', 'Astronomische Einheiten' ]
    },
    description: {
      en: 'accepted unit of length; equal to the mean distance between Earth and Sun',
      de: 'akzeptierte Längeneinheit; gleich der mittleren Entfernung zwischen Erde und Sonne'
    }
  }
} ) as const satisfies UnitDef< LengthDim, typeof astroUnit >;
