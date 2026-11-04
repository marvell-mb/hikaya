import React from 'react';
const V={
  novo:{background:'var(--bg-brand)',color:'var(--fg-on-brand)'},
  promocao:{background:'var(--accent)',color:'var(--tinta-800)'},
  frete:{background:'var(--bg-surface)',color:'var(--fg-brand)',boxShadow:'inset 0 0 0 1px var(--fg-brand)'},
  esgotado:{background:'var(--tinta-600)',color:'var(--creme-100)'},
  neutro:{background:'var(--bg-surface)',color:'var(--fg-2)'}
};
export function Badge({variant='novo',children,style}){
  return <span style={{display:'inline-flex',alignItems:'center',height:26,padding:'0 10px',fontFamily:'var(--font-body)',fontWeight:700,fontSize:'var(--text-label)',letterSpacing:'var(--tracking-badge)',textTransform:'uppercase',lineHeight:1,whiteSpace:'nowrap',...(V[variant]||V.novo),...style}}>{children}</span>;
}
