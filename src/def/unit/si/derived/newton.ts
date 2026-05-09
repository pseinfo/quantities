import type { ForceDim } from '../../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../../types/unit';

import { kilo } from '../../../prefix';

import { gram } from '../base/gram';
import { meter } from '../base/meter';
import { second } from '../base/second';

export const newton = 'N' as UnitRef< ForceDim, 'N' >;

export default ( {
  id: newton,
  dim: [ -2, 1, 1, 0, 0, 0, 0 ],
  structure: [ {
    unit: gram,
    exp: 1,
    prefix: kilo
  }, {
    unit: meter,
    exp: 1
  }, {
    unit: second,
    exp: -2
  } ],
  conversion: 1,
  prefixable: true,
  aliases: [ 'newton' ],
  context: {
    system: [ 'si' ],
    si: 'derived',
    status: 'active'
  },
  meta: {
    symbol: [ {
      id: 'N',
      canonical: true,
      format: {
        plain: 'N',
        latex: '\\mathrm{N}'
      }
    } ],
    name: {
      en: [ 'newton' ],
      de: [ 'Newton' ]
    },
    description: {
      en: 'derived SI unit of force',
      de: 'abgeleitete SI-Einheit der Kraft'
    }
  }
} ) as const satisfies UnitDef< ForceDim, typeof newton >;
