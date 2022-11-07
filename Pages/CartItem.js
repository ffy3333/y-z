import React from 'react';
import Move from './Move';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { i12, tablete } from '../Components/resposive';
const Wrapper = styled.div`
  position: fixed;
  color: #ffe599;

  font-size: 36px;
  border: 3px solid #ffe599;
  ${tablete({ fontSize: '40px' })}
  ${i12({ fontSize: '30px' })}
`;
const CartItem = () => {
  return (
    <div>
      <Link to="/sections">
        <Wrapper>Back</Wrapper>
      </Link>
      <Move />
    </div>
  );
};

export default CartItem;
