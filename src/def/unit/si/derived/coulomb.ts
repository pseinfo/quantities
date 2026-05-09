import type { ElectricChargeDim } from '../../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../../types/unit';

import { ampere } from '../base/ampere';
import { second } from '../base/second';

export const coulomb = 'C' as UnitRef< ElectricChargeDim, 'C' >;

export default ( {
  id: coulomb,
  dim: [ 1, 0, 0, 1, 0, 0, 0 ],
  structure: [ {
    unit: ampere,
    exp: 1
  }, {
    unit: second,
    exp: 1
  } ],
  conversion: 1,
  prefixable: true,
  aliases: [ 'coulomb', 'coulombs' ],
  context: {
    system: [ 'si' ],
    si: 'derived',
    status: 'active'
  },
  meta: {
    symbol: [ {
      id: 'C',
      canonical: true,
      format: {
        plain: 'C',
        latex: '\\mathrm{C}'
      }
    }, {
      id: 'Cb',
      deprecated: true,
      format: {
        plain: 'Cb',
        latex: '\\mathrm{Cb}'
      }
    } ],
    name: {
      en: [ 'coulomb', 'coulombs' ],
      de: [ 'Coulomb' ]
    },
    description: {
      en: 'derived SI unit of electric charge',
      de: 'abgeleitete SI-Einheit der elektrischen Ladung'
    }
  }
} ) as const satisfies UnitDef< ElectricChargeDim, typeof coulomb >;
