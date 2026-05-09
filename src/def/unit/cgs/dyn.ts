import type { ForceDim } from '../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../types/unit';

import { centi } from '../../prefix';

import { gram } from '../si/base/gram';
import { meter } from '../si/base/meter';
import { second } from '../si/base/second';
import { newton } from '../si/derived/newton';

export const dyn = 'dyn' as UnitRef< ForceDim, 'dyn' >;

export default ( {
  id: dyn,
  dim: [ -2, 1, 1, 0, 0, 0, 0 ],
  structure: [ {
    unit: gram,
    exp: 1
  }, {
    unit: meter,
    exp: 1,
    prefix: centi
  }, {
    unit: second,
    exp: -2
  } ],
  conversion: {
    factor: 1e-5,
    base: newton
  },
  prefixable: false,
  context: {
    system: [ 'cgs' ],
    status: 'historical'
  },
  meta: {
    symbol: [ {
      id: 'dyn',
      canonical: true,
      format: {
        plain: 'dyn',
        latex: '\\mathrm{dyn}'
      }
    } ],
    name: {
      en: [ 'dyn' ],
      de: [ 'Dyn' ]
    },
    description: {
      en: 'historical CGS unit of force',
      de: 'historische CGS-Einheit der Kraft'
    }
  }
} ) as const satisfies UnitDef< ForceDim, typeof dyn >;
