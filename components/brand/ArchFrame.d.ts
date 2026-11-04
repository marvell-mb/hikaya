import * as React from 'react';
/** Moldura em janela mourisca (topo semicircular) para foto de produto. */
export interface ArchFrameProps {
  width?: number;
  /** altura = width × ratio */
  ratio?: number;
  /** espessura da moldura em px; 0 = sem moldura */
  border?: number;
  frameColor?: string;
  src?: string;
  alt?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function ArchFrame(props: ArchFrameProps): JSX.Element;
