import React, {Fragment} from 'react';
import styled from 'styled-components'
import GlobalStyle from './theme/globalStyle';
import Play from '@components/play'

import 'normalize.css'
import 'milligram'


function App() {

  const headerHeight='60px'
  const footerHeight='30px'

  const Header = styled.header`
    height: ${headerHeight};
    background: #333
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
  const VideosList = styled.div`
    display: flex;
    flex-wrap: wrap;
`
  const Video = styled.section`
    flex: 1 1 300px;
    margin: 0 5px 5px; 
`
  const VideoThumb = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #999;
    height: 150px;
    justify-content: center;
`
const VideoTitle = styled.h2`
    font-size: 18px;
`
const PlayStyled = styled(Play)`
    fill: #999;
    width: 150px;
    height: 50px;
`
  return (
    <Fragment>
      <GlobalStyle />
      <Container>
        <Header>
          <h1>Reactflix</h1>
        </Header>
      
        <Main>
          <VideosList>
            {Array.from({ length:10 }).map((item, index) => (
              <Video key={index}>
                <VideoThumb>
                  <PlayStyled />
                </VideoThumb> 
                <VideoTitle>Titulo do video</VideoTitle>
              </Video>
            ))}
          </VideosList>
        </Main>

        <Footer>
          &copy;2020
        </Footer>
      </Container> 
    </Fragment>
  )

}

export default App;
