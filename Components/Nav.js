import styled from 'styled-components';
import W from '../Assetss/W.png';
import { useSelector } from 'react-redux';
import { BsBagFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { i12, tablete } from './resposive';
const Containaire = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 14vh;
  background: #ffe599;
`;
const Image = styled.img`
  width: 10%;

  margin-top: 2%;
  cursor: pointer;
  ${tablete({ width: '30%', marginLeft: '3%' })}
  ${i12({ width: '50%', marginLeft: '-11%', marginTop: '2.6%' })}
`;
const Menu = styled.ul``;
const MenuItem = styled.li`
  font-size: 100px;
  cursor: pointer;
  color: #ffe599;
  ${tablete({ marginLeft: '-99%' })}
  ${i12({ marginTop: '8%', marginLeft: '-25%' })}
`;
const Number = styled.span`
  font-size: 50px;
  color: #ffe599;
  position: absolute;
  margin-top: -4.9%;
  margin-left: 0.2%;
  text-align: center;
  ${tablete({ marginTop: '-9%', marginLeft: '-9%', color: 'black' })}
  ${i12({ marginTop: '-24%', marginLeft: '-8%', color: 'yellow' })}
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Info = styled.div`
  position: absolute;
  font-size: 35px;
  margin-top: 5%;
  margin-left: 2.5%;
  color: #c5b075;
  ${tablete({ marginTop: '12%', marginLeft: '11.4%', fontSize: '50px' })}
  ${i12({ marginTop: '18%', fontSize: '35px', marginLeft: '2.3%' })}
`;

const Nav = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <>
      <Link to="/home">
        <Containaire>
          <Image src={W} />
          <Info>Y & Z</Info>

          <Menu>
            <MenuItem>
              <Link to="/cartitem">
                <BsBagFill color="  #c5b075" />

                <Wrapper>
                  <Number>{totalQuantity}</Number>
                </Wrapper>
              </Link>
            </MenuItem>
          </Menu>
        </Containaire>
      </Link>
    </>
  );
};

export default Nav;
