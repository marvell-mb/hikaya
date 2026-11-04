/** Preço em reais, com valor antigo riscado e parcelamento opcionais. */
export interface PriceProps {
  value: number;
  oldValue?: number;
  /** Ex.: "3x de R$ 96,33 sem juros" */
  installments?: string;
  size?: 'sm' | 'md' | 'lg';
  onBrand?: boolean;
}
export declare function Price(props: PriceProps): JSX.Element;
