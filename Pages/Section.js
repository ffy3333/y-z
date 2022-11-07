import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { cartActions } from '../redux/slices/cartSlice';
import { i12 } from '../Components/resposive';
const Info = styled.div`
  opacity: 0;
  position: absolute;
  top: 0%;
  margin-left: -22%;
  width: 152%;
  height: 170%;

  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 14px;
  cursor: pointer;
  ${i12({ height: '80%', marginLeft: '-53%', marginTop: '30%', width: '90%' })}
`;
const Container = styled.div`
  flex: 0.2;
  margin: 135px;
  position: relative;
  min-width: 280px;
  height: 350px;
  &:hover ${Info} {
    opacity: 1;
  }
  ${i12({ margin: '5px' })}
`;
const Desc = styled.p`
  letter-spacing: 10px;
  margin-bottom: 25%;
  margin-top: -32%;
  color: white;
  font-size: 35px;
  background: #c5b075;
  border-radius: 14px;
  padding: 15px;
  ${i12({ fontSize: '12px' })}
`;
const Button = styled.button`
  display: block;
  margin: 20px auto;
  border-radius: 14px;
  width: 200px;
  height: 60px;
  font-size: 30px;
  font-weight: 700;
  cursor: pointer;

  background-color: transparent;
  color: #ffffff;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  border: 2px solid #ffffff;

  &:before {
    content: '';
    display: inline-block;
    width: 200px;
    height: 200px;

    position: absolute;
    background-color: #ffffff;
    left: 0;
    top: 70px;
    transition: all 0.5s ease-in-out;
    z-index: -2;
  }
  &:after {
    content: '';
    display: inline-block;
    width: 200px;
    height: 200px;
    transform: rotate(180deg);
    position: absolute;
    background-color: #ffffff;
    left: 0;
    top: -300px;
    transition: all 0.5s ease-in-out;
    z-index: -3;
  }
  &:hover&:after,
  &:hover&:before {
    top: 0;
  }
  &:hover {
    color: #c5b075;
    transform: scale(1.2, 1.2);
  }
  ${i12({ width: '70px', fontSize: '16px' })}
`;
const Image = styled.img`
  height: 170%;
  margin-left: -22%;
  border-radius: 14px;
  background: #ffe599;
  ${i12({
    height: '80%',
    marginLeft: '-45%',

    marginTop: '16%',
  })}
`;

const Section = ({ item }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
      })
    );
  };

  return (
    <Container>
      <Image src={item.image} />

      <Info>
        <Desc>{item.name}</Desc>

        <Button onClick={addToCart}>${item.price}</Button>
      </Info>
    </Container>
  );
};
export default Section;
