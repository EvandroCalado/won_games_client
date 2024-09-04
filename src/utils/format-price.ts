export const formatPrice = (price: number | bigint): string => {
  if (!price) return 'FREE';

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
};
