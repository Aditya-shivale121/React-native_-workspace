export interface Currency {
  name: string;
  value: number;
  flag: string;
  symbol: string;
}

export const currencyByRupee: Currency[] = [
  {
    name: 'DOLLAR',
    value: 0.012,
    flag: '🇺🇸',
    symbol: '$',
  },
  {
    name: 'EURO',
    value: 0.011,
    flag: '🇪🇺',
    symbol: '€',
  },
  {
    name: 'POUND',
    value: 0.0093,
    flag: '🇬🇧',
    symbol: '£',
  },
  {
    name: 'RUBLE',
    value: 1.13,
    flag: '🇷🇺',
    symbol: '₽',
  },
  {
    name: 'AUS DOLLAR',
    value: 0.018,
    flag: '🇦🇺',
    symbol: 'A$',
  },
  {
    name: 'CAN DOLLAR',
    value: 0.016,
    flag: '🇨🇦',
    symbol: 'C$',
  },
  {
    name: 'YEN',
    value: 1.83,
    flag: '🇯🇵',
    symbol: '¥',
  },
  {
    name: 'DINAR',
    value: 0.0037,
    flag: '🇰🇼',
    symbol: 'KD',
  },
  {
    name: 'BITCOIN',
    value: 0.0000003,
    flag: '🪙',
    symbol: '₿',
  },
];
