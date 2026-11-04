import React from 'react';
const V={
  primary:{background:'var(--bg-brand)',color:'var(--fg-on-brand)',boxShadow:'none'},
  secondary:{background:'transparent',color:'var(--fg-brand)',boxShadow:'inset 0 0 0 1.5px var(--fg-brand)'},
  gold:{background:'var(--accent)',color:'var(--tinta-800)',boxShadow:'none'},
  ghost:{background:'transparent',color:'var(--fg-brand)',boxShadow:'none',textDecoration:'underline',textUnderlineOffset:'4px'}
};
const S={sm:{height:36,padding:'0 16px',fontSize:14},md:{height:44,padding:'0 24px',fontSize:16},lg:{height:52,padding:'0 32px',fontSize:17}};
export function Button({variant='primary',size='md',disabled=false,icon=null,children,style,...rest}){
  const [h,setH]=React.useState(false);
  const v=V[variant]||V.primary;
  const hover=h&&!disabled?(variant==='primary'?{background:'var(--verde-700)'}:variant==='gold'?{background:'#B0863B'}:{background:'var(--bg-surface)'}):{};
  return <button disabled={disabled} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{display:'inline-flex',alignItems:'center',justifyContent:'center',gap:8,border:0,borderRadius:0,fontFamily:'var(--font-body)',fontWeight:700,letterSpacing:'0.02em',cursor:disabled?'not-allowed':'pointer',opacity:disabled?0.45:1,transition:'background var(--dur-fast) var(--ease-out)',...S[size],...v,...hover,...style}} {...rest}>{icon}{children}</button>;
}
