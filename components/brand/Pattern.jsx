import React from 'react';
const STAR='48,22.54 55.46,30 66,30 66,40.54 73.46,48 66,55.46 66,66 55.46,66 48,73.46 40.54,66 30,66 30,55.46 22.54,48 30,40.54 30,30 40.54,30';
const P=['M0 12 C-5 8 -4 2 0 -6 C4 2 5 8 0 12 Z','M96 12 C91 8 92 2 96 -6 C100 2 101 8 96 12 Z','M0 108 C-5 104 -4 98 0 90 C4 98 5 104 0 108 Z','M96 108 C91 104 92 98 96 90 C100 98 101 104 96 108 Z'];
export function Pattern({tone='verde',scale=1,children,style}){
  const id='hk-pat-'+React.useId().replace(/:/g,'');
  const bg=tone==='verde'?'var(--bg-brand)':'var(--bg-surface)';
  const ink=tone==='verde'?'#0E5640':'#E7DABD';
  const t=96*scale;
  return <div style={{position:'relative',overflow:'hidden',background:bg,...style}}>
    <svg width="100%" height="100%" style={{position:'absolute',inset:0}} aria-hidden="true"><defs><pattern id={id} width={t} height={t} patternUnits="userSpaceOnUse"><g transform={'scale('+scale+')'}><polygon points={STAR} fill="none" stroke={ink} strokeWidth="2"/><g fill={ink}>{P.map((d,i)=><path key={i} d={d}/>)}</g></g></pattern></defs><rect width="100%" height="100%" fill={'url(#'+id+')'}/></svg>
    {children!=null&&<div style={{position:'relative',height:'100%'}}>{children}</div>}
  </div>;
}
