import type { UnitDef, UnitId } from '../../../types/unit';

export default ( {
  id: 's' as UnitId< 's' >,
  dim: [ 1, 0, 0, 0, 0, 0, 0 ],
  structure: [],
  conversion: 1,
  prefixable: true
} ) as const satisfies UnitDef;
