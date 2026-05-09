import type { EnergyDim } from '../../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../../types/unit';

import { kilo } from '../../../prefix';

import { gram } from '../base/gram';
import { meter } from '../base/meter';
import { second } from '../base/second';

export const joule = 'J' as UnitRef< EnergyDim, 'J' >;

export default ( {
  id: joule,
  dim: [ -2, 2, 1, 0, 0, 0, 0 ],
  structure: [ {
    unit: gram,
    exp: 1,
    prefix: kilo
  }, {
    unit: meter,
    exp: 2
  }, {
    unit: second,
    exp: -2
  } ],
  conversion: 1,
  prefixable: true,
  aliases: [ 'joule', 'joules' ],
  context: {
    system: [ 'si' ],
    si: 'derived',
    status: 'active'
  },
  meta: {
    symbol: [ {
      id: 'J',
      canonical: true,
      format: {
        plain: 'J',
        latex: '\\mathrm{J}'
      }
    } ],
    name: {
      en: [ 'joule', 'joules' ],
      de: [ 'Joule' ]
    },
    description: {
      en: 'derived SI unit of energy',
      de: 'abgeleitete SI-Einheit der Energie'
    }
  }
} ) as const satisfies UnitDef< EnergyDim, typeof joule >;
