import styled from 'styled-components';
import Section from './Section';
import data from '../data';
import Nav from '../Components/Nav';
import Ticktacks from '../Components/Ticktacks';
import { useEffect, useState } from 'react';
import { i12, tablete } from '../Components/resposive';

const Container = styled.div`
  display: flex;
  padding: 90px;
  flex-wrap: wrap;
  background: white;
  position: relative;
  ${tablete({ padding: '200px' })}
`;

const Menu = styled.h1`
  position: absolute;
  font-size: 37px;
  color: #c5b075;
  margin-left: 10%;
  letter-spacing: 34px;
  ${tablete({ fontSize: '30px', letterSpacing: '0px', marginLeft: '6%' })}
  ${i12({ fontSize: '15px', letterSpacing: '0px', marginLeft: '-30%' })}
`;

const Sections = () => {
  const [laoded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1500);
  }, []);
  return (
    <>
      {laoded ? null : <Ticktacks />}
      <Nav />
      <Container>
        <Menu>READY-TO-WEAR-FOR-WOMEN</Menu>

        {data.products.map((item) => (
          <Section item={item} key={item.id} />
        ))}
      </Container>
    </>
  );
};
export default Sections;
