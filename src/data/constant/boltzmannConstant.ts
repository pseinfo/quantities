import type { ConstantConfig } from '../../types/constant';

export default ( {
  id: 'boltzmannConstant',
  symbol: {
    plain: 'kB',
    latex: 'k_{\mathrm {B}}'
  },
  name: {
    en: 'Boltzmann constant',
    de: 'Boltzmann-Konstante'
  },
  value: 1.380649e-23,
  relUncertainty: 0,
  vector: [ -2, 2, 1, 0, -1, 0, 0 ],
  unit: 'joulePerKelvin'
} ) as const satisfies ConstantConfig;
