export type UnitId< ID extends string = string > = ID & { readonly __brand: 'unitId' };
