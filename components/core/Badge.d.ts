import * as React from 'react';
/** Selo retangular em caixa alta (Novo, Promoção, Frete grátis, Esgotado). */
export interface BadgeProps {
  variant?: 'novo' | 'promocao' | 'frete' | 'esgotado' | 'neutro';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Badge(props: BadgeProps): JSX.Element;
