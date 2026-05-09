import type { FrequencyDim } from '../../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../../types/unit';

import { second } from '../base/second';

export const hertz = 'Hz' as UnitRef< FrequencyDim, 'Hz' >;

export default ( {
  id: hertz,
  dim: [ -1, 0, 0, 0, 0, 0, 0 ],
  structure: [ {
    unit: second,
    exp: -1
  } ],
  conversion: 1,
  prefixable: true,
  aliases: [ 'hertz', 'hertzes' ],
  context: {
    system: [ 'si' ],
    si: 'derived',
    status: 'active'
  },
  meta: {
    symbol: [ {
      id: 'Hz',
      canonical: true,
      format: {
        plain: 'Hz',
        latex: '\\mathrm{Hz}'
      }
    } ],
    name: {
      en: [ 'hertz', 'hertzes' ],
      de: [ 'Hertz' ]
    },
    description: {
      en: 'derived SI unit of frequency',
      de: 'abgeleitete SI-Einheit der Frequenz'
    }
  }
} ) as const satisfies UnitDef< FrequencyDim, typeof hertz >;
