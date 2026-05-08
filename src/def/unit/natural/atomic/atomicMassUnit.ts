import type { MassDim } from '../../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../../types/unit';

export const atomicMassUnit = 'u' as UnitRef< MassDim, 'u' >;

export default ( {
  id: atomicMassUnit,
  dim: [ 0, 0, 1, 0, 0, 0, 0 ],
  structure: [],
  conversion: {
    factor: 1.6605390689252e-27
  },
  prefixable: false,
  aliases: [ 'unified atomic mass unit', 'atomic mass unit', 'dalton' ],
  context: {
    system: [ 'natural', 'natural_atomic' ],
    status: 'active'
  },
  meta: {
    symbol: [ {
      id: 'u',
      canonical: true,
      context: {
        system: [ 'natural', 'natural_atomic' ]
      },
      format: {
        plain: 'u',
        latex: '\\mathrm{u}'
      }
    }, {
      id: 'Da',
      context: {
        system: [ 'natural', 'natural_atomic' ]
      },
      format: {
        plain: 'Da',
        latex: '\\mathrm{Da}'
      }
    } ],
    name: {
      en: [ 'unified atomic mass unit', 'unified atomic mass units' ],
      de: [ 'Atomare Masseneinheit', 'Atomare Masseneinheiten' ]
    },
    description: {
      en: 'atomic unit of mass, defined as 1/12 the mass of a carbon-12 atom',
      de: 'Atomare Masseneinheit, definiert als 1/12 der Masse eines Kohlenstoff-12-Atoms'
    }
  }
} ) as const satisfies UnitDef< MassDim, typeof atomicMassUnit >;
