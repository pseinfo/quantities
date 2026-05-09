import type { ActivityDim } from '../../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../../types/unit';

import { second } from '../base/second';

export const becquerel = 'Bq' as UnitRef< ActivityDim, 'Bq' >;

export default ( {
  id: becquerel,
  dim: [ -1, 0, 0, 0, 0, 0, 0 ],
  structure: [ {
    unit: second,
    exp: -1
  } ],
  conversion: 1,
  prefixable: true,
  aliases: [ 'becquerel', 'becquerels' ],
  context: {
    system: [ 'si' ],
    si: 'derived',
    status: 'active'
  },
  meta: {
    symbol: [ {
      id: 'Bq',
      canonical: true,
      format: {
        plain: 'Bq',
        latex: '\\mathrm{Bq}'
      }
    } ],
    name: {
      en: [ 'becquerel', 'becquerels' ],
      de: [ 'Becquerel' ]
    },
    description: {
      en: 'derived SI unit of specific activity',
      de: 'abgeleitete SI-Einheit der (radioaktiven) Aktivität'
    }
  }
} ) as const satisfies UnitDef< ActivityDim, typeof becquerel >;
