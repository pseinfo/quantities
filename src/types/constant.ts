import { DimensionVector } from './dimension';
import type { Language } from './generic';

export type ConstantConfig = Readonly< {
  id: string;
  symbol: {
    plain: string;
    latex: string;
  },
  name: { [ K in Language ]?: string };
  value: number;
  relUncertainty: number;
  vector: DimensionVector;
  quantity: string;
  unit: string;
} >;
