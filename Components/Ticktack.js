import React from 'react';
import lodi from '../Assetss/lodi.gif';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { i12, tablete } from './resposive';

const GlobalStyle = createGlobalStyle`
body{
  overflow: hidden;
 
}

`;
const Image = styled.img`
  width: 100%;
  object-fit: contain;
  margin-top: -16%;
  position: absolute;
  z-index: 15;
  ${tablete({ display: 'none' })}
  ${i12({ display: 'none' })}
`;
const Ticktack = () => {
  return (
    <>
      <GlobalStyle />
      <div>
        <Image src={lodi} />
      </div>
    </>
  );
};

export default Ticktack;
