import React, {Fragment} from 'react';
import styled from 'styled-components'

import 'normalize.css'
import 'milligram'
import GlobalStyle from './theme/globalStyle';

function App() {

  const headerHeight='60px'
  const footerHeight='30px'

  const Header = styled.header`
    height: ${headerHeight};
    background: #333
`
  const Footer = styled.footer`
    height: ${footerHeight};
    background: #333
`
  const Main = styled.main`
    min-height: calc(100% - ${headerHeight} - ${footerHeight});
    background: pink
`
  const Container = styled.div`
    height: 100%
`
  return (
    <Fragment>
      <GlobalStyle />
      <Container>
        <Header>
          <h1>Reactflix</h1>
        </Header>
      
        <Main>
          Conteudo
        </Main>

        <Footer>
          &copy;2020
        </Footer>
      </Container> 
    </Fragment>
  )

}

export default App;
