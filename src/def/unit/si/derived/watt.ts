import type { PowerDim } from '../../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../../types/unit';

import { kilo } from '../../../prefix';

import { gram } from '../base/gram';
import { meter } from '../base/meter';
import { second } from '../base/second';

export const watt = 'W' as UnitRef< PowerDim, 'W' >;

export default ( {
  id: watt,
  dim: [ -3, 2, 1, 0, 0, 0, 0 ],
  structure: [ {
    unit: gram,
    exp: 1,
    prefix: kilo
  }, {
    unit: meter,
    exp: 2
  }, {
    unit: second,
    exp: -3
  } ],
  conversion: 1,
  prefixable: true,
  aliases: [ 'watt', 'watts' ],
  context: {
    system: [ 'si' ],
    si: 'derived',
    status: 'active'
  },
  meta: {
    symbol: [ {
      id: 'W',
      canonical: true,
      format: {
        plain: 'W',
        latex: '\\mathrm{W}'
      }
    } ],
    name: {
      en: [ 'watt', 'watts' ],
      de: [ 'Watt' ]
    },
    description: {
      en: 'derived SI unit of power',
      de: 'abgeleitete SI-Einheit der Leistung'
    }
  }
} ) as const satisfies UnitDef< PowerDim, typeof watt >;
