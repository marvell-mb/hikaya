import * as React from 'react';
/** Logo oficial em curvas. Usa os arquivos de logo/svg — nunca recriar em texto. */
export interface LogoProps {
  version?: 'vertical' | 'horizontal' | 'roseta' | 'nome';
  /** cores = fundo claro; negativo = fundo verde; mono-creme = fotos/fundos escuros */
  color?: 'cores' | 'negativo' | 'mono-verde' | 'mono-dourado' | 'mono-creme' | 'mono-preto';
  width?: number | string;
  /** Caminho até logo/svg/ a partir da página */
  basePath?: string;
  alt?: string;
  style?: React.CSSProperties;
}
export declare function Logo(props: LogoProps): JSX.Element;
