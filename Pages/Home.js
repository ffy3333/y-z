import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import yz from '../Assetss/yz.mp4';
import { Link } from 'react-router-dom';

import { createGlobalStyle } from 'styled-components';

import Ticktack from '../Components/Ticktack';
import { i12, tablete } from '../Components/resposive';

const GlobalStyle = createGlobalStyle`
body{
  overflow: hidden;

}

`;

const Container = styled.div`
  color: white;
`;
const Video = styled.video`
  z-index: 1;
  width: 100%;
  ${tablete({ height: '95vh' })}
`;
const InfoWlf = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;

  justify-content: center;
  align-items: center;
  z-index: 2;
  position: absolute;

  ${tablete({ marginTop: '0%', marginLeft: '0%' })}
  ${i12({ marginTop: '0%', marginLeft: '0%' })}
`;

const Button = styled.button`
  padding: 18px;
  border-radius: 23px;
  border: 3px solid white;
  background: transparent;
  color: white;
  font-size: 50px;
  cursor: pointer;
  ${i12({ fontSize: '25px', padding: '10px' })}

  margin-top: 4%;
`;

const Home = () => {
  const [laoded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1200);
  }, []);
  return (
    <>
      {laoded ? null : <Ticktack />}
      <GlobalStyle />

      <Container>
        <Video src={yz} autoPlay loop muted />
        <InfoWlf>
          <Link to="/sections">
            <Button>Shop Now</Button>
          </Link>
        </InfoWlf>
      </Container>
    </>
  );
};

export default Home;
