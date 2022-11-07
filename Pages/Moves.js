import React from 'react';
import { cartActions } from '../redux/slices/cartSlice';
import { useDispatch } from 'react-redux';
import { MdAdd, MdRemove } from 'react-icons/md';
import { AiFillDelete } from 'react-icons/ai';

import styled from 'styled-components';
import { i12, tablete } from '../Components/resposive';

const Moves = ({ item }) => {
  const { id, name, price, image } = item;
  const dispatch = useDispatch();
  const incrementItem = () => {
    dispatch(
      cartActions.addItem({
        id,
      })
    );
  };

  const decreaseItem = () => {
    dispatch(cartActions.removeItem(id));
  };
  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
  };

  const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    background: #c5b075;
  `;

  const Container = styled.div`
    background: #c5b075;

    height: 100%;
    width: 26%;
    display: flex;
    justify-content: flex-end;
  `;
  const Price = styled.p`
    margin-top: -9%;
    margin-left: 8%;
    font-size: 26px;
    color: black;
    ${tablete({ marginLeft: '-28%', marginTop: '-6%' })}
    ${i12({ marginLeft: '-100%', marginTop: '0%' })}
  `;

  const ItemName = styled.h1`
    color: black;
    ${tablete({ marginRight: '30%' })}
    ${i12({ marginRight: '-120%', fontSize: '20px' })}
  `;
  const Image = styled.img`
    width: 19%;
    margin-top: 2%;
    ${i12({ marginLeft: '32%', marginTop: '0%', width: '50%' })}
  `;
  const InfoContainer = styled.div`
    display: flex;
    justify-content: center;
    ${tablete({ marginRight: '-120%' })}
    ${i12({ marginRight: '-110%' })}
  `;
  const InfoWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    ${tablete({ marginRight: '-110%' })}
    ${i12({ marginRight: '-115%' })}
  `;
  const Addremove = styled.p`
    margin-left: 12%;
    margin-top: -9%;
    font-size: 26px;
    color: black;
    cursor: pointer;
    ${tablete({ marginLeft: '18%', marginTop: '-6%' })}
    ${i12({ marginLeft: '24%', marginTop: '-15%' })}
  `;
  const Delete = styled.p`
    margin-left: 6%;
    margin-top: -9%;
    font-size: 26px;
    color: black;
    cursor: pointer;
    ${tablete({ marginLeft: '18%', marginTop: '-6%' })}
    ${i12({ marginLeft: '10%', marginTop: '-15%' })}
  `;
  const Number = styled.p`
    position: absolute;
    margin-right: 5.3%;
    margin-top: -2.2%;
    font-size: 26px;
    color: black;
    ${tablete({ marginRight: '20%', marginTop: '-3.8%' })}
    ${i12({ marginRight: '24%', marginTop: '-9%' })}
  `;

  return (
    <>
      <Wrapper>
        <Container>
          <div>
            <ItemName>{item.name}</ItemName>
            <Image src={item.image} />
            <InfoContainer>
              <Price>${item.price}</Price>
            </InfoContainer>
            <InfoWrapper>
              <Addremove onClick={incrementItem}>
                <MdAdd />
              </Addremove>
              <Number>{item.quantity}</Number>
              <Addremove onClick={decreaseItem}>
                <MdRemove />
              </Addremove>

              <Delete onClick={deleteProduct}>
                <AiFillDelete />
              </Delete>
            </InfoWrapper>
          </div>
        </Container>
      </Wrapper>
    </>
  );
};

export default Moves;
