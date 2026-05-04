import type { ConstantConfig } from '../../types/constant';

export default ( {
  id: 'planckConstant',
  symbol: {
    plain: 'h',
    latex: 'h'
  },
  name: {
    en: 'Planck constant',
    de: 'Planck-Konstante'
  },
  value: 6.62607015e-34,
  relUncertainty: 0,
  vector: [ -1, 2, 1, 0, 0, 0, 0 ],
  quantity: 'action',
  unit: 'joulePerHertz'
} ) as const satisfies ConstantConfig;
