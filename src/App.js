import React, {Fragment} from 'react';
import styled from 'styled-components'
import GlobalStyle from './theme/globalStyle';
import VideosList from '@components/videos-list'
import VideoSingle from '@components/video-single'
import RegisterVideo from '@components/register-video'

import 'normalize.css'
import 'milligram'


function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Container>
        <Header>
          <h1>Reactflix</h1>
        </Header>
      
        <Main>
          <RegisterVideo />
          <VideoSingle />
          <VideosList />
        </Main>

        <Footer>
          &copy;2020
        </Footer>
      </Container> 
    </Fragment>
  )
}
  const headerHeight='60px'
  const footerHeight='30px'

  const Header = styled.header`
    height: ${headerHeight};
    background: #333;
    padding: 0 10px;
`
  const Footer = styled.footer`
    height: ${footerHeight};
    background: #333;
`
  const Main = styled.main`
    min-height: calc(100% - ${headerHeight} - ${footerHeight});
    background: pink;
`
  const Container = styled.div`
    height: 100%
`

export default App;
