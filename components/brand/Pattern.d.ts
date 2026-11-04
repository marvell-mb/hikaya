import * as React from 'react';
/** Fundo com o padrão oficial (estrela em contorno + pétala), um tom acima do fundo. */
export interface PatternProps {
  tone?: 'verde' | 'creme';
  /** 1 = módulo de 96 px */
  scale?: number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Pattern(props: PatternProps): JSX.Element;
