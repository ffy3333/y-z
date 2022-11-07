import React from 'react';
import lods from '../Assetss/lods.gif';
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
  margin-top: 0%;

  position: absolute;
  z-index: 15;
  ${tablete({ display: 'none' })}
  ${i12({ display: 'none' })}
`;
const Ticktacks = () => {
  return (
    <>
      <GlobalStyle />
      <div>
        <Image src={lods} />
      </div>
    </>
  );
};

export default Ticktacks;
