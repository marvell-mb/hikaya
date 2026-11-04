import React from 'react';
export function ArchFrame({width=320,ratio=1.3,border=12,frameColor='var(--bg-surface)',src,alt='',children,style}){
  const h=Math.round(width*ratio);
  return <div style={{width,height:h,padding:border,background:frameColor,borderRadius:(width/2)+'px '+(width/2)+'px 0 0',boxSizing:'border-box',...style}}>
    <div style={{width:'100%',height:'100%',borderRadius:((width-2*border)/2)+'px '+((width-2*border)/2)+'px 0 0',overflow:'hidden',background:'var(--creme-400)',position:'relative'}}>
      {src?<img src={src} alt={alt} style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/>:children}
    </div>
  </div>;
}
