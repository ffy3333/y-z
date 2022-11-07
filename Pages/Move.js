import React from 'react';
import Moves from './Moves';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { i12 } from '../Components/resposive';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: white;
  ${i12({ height: '150vh' })}
`;

const Move = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <>
      <Container>
        <div>
          {cartItems.map((item, index) => (
            <Moves item={item} key={index} />
          ))}
        </div>
      </Container>
    </>
  );
};

export default Move;
