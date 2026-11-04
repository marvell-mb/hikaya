import * as React from 'react';
/**
 * Botão retangular reto, Alegreya Sans bold.
 * @startingPoint section="Core" subtitle="Botões da marca" viewport="700x200"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** primary = verde; secondary = contorno verde; gold = dourado (destaque raro); ghost = link sublinhado */
  variant?: 'primary' | 'secondary' | 'gold' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
