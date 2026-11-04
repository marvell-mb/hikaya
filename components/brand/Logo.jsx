import React from 'react';
export function Logo({version='vertical',color='cores',width=200,basePath='logo/svg/',alt='Hikaya',style}){
  return <img src={basePath+'hikaya-'+version+'-'+color+'.svg'} alt={alt} style={{width,height:'auto',display:'block',...style}} />;
}
