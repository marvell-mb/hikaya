import React from 'react';
const fmt=n=>Number(n).toLocaleString('pt-BR',{minimumFractionDigits:Number.isInteger(Number(n))?0:2,maximumFractionDigits:2});
export function Price({value,oldValue,installments,size='md',onBrand=false}){
  const fs={sm:18,md:24,lg:36}[size]||24;
  const c=onBrand?'var(--fg-on-brand)':'var(--fg-brand)';
  return <span style={{display:'inline-flex',flexDirection:'column',gap:2,fontFamily:'var(--font-body)'}}>
    {oldValue!=null&&<span style={{fontSize:fs*0.55,color:onBrand?'var(--creme-500)':'var(--fg-3)',textDecoration:'line-through'}}>R$ {fmt(oldValue)}</span>}
    <span style={{fontWeight:700,fontSize:fs,lineHeight:1,color:c,display:'inline-flex',alignItems:'baseline',gap:4}}><span style={{fontSize:fs*0.6,fontWeight:500}}>R$</span>{fmt(value)}</span>
    {installments&&<span style={{fontSize:Math.max(13,fs*0.55),color:onBrand?'var(--creme-400)':'var(--fg-2)'}}>{installments}</span>}
  </span>;
}
