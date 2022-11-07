import styled from 'styled-components';
import Layout from './Components/Layout/Layout';
import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
body{

  ::-webkit-scrollbar {
    width: 9px;
    
  }
  ::-webkit-scrollbar-thumb {
    background:#c5b075 ;
    border-radius:50px;
  }
  ::-webkit-scrollbar-track{
      background: linear-gradient(0deg,#ffe599, #000000);
     
  }

}

`;
const Container = styled.div`
  overflow-x: hidden;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Layout />
      </Container>
    </>
  );
};
export default App;
