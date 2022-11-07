import styled from 'styled-components';
import { i12 } from './resposive';

const Container = styled.div`
  display: flex;
  margin-top: 10%;
  background: #ffe599;
  ${i12({ flexDirection: 'column' })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${i12({ display: 'none' })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Y&Z</Logo>
        <Desc>
          Our Y&Z conditions deliver anywhere in the world. Maison Y&Z does not
          deliver orders to business addresses, post office boxes, hotels and
          university campuses. Orders addressed to any of these destinations
          will not be processed. The delivery of the articles will take place
          after the complete payment of the ordered articles. Orders made from
          the site of a country different from that of the delivery address will
          not be processed.
        </Desc>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem> Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>

          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>

          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          Adresse: 622 Dixie Path , South Tobinchester 98336
        </ContactItem>
        <ContactItem>Number :+1 397 56 78</ContactItem>
        <ContactItem>Email: gold@y&z.mode</ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
