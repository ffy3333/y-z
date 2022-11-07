import styled from 'styled-components';
import { RiSendPlane2Fill } from 'react-icons/ri';
import { i12 } from './resposive';
const Container = styled.div`
  height: 60vh;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 8%;
  ${i12({ marginTop: '-30%' })}
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${i12({ fontSize: '17px' })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #ffe599;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite wear.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <RiSendPlane2Fill size="2.4rem" color="black" />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
