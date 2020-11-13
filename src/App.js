import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components'
import GlobalStyle from './theme/globalStyle';
import Header from '@components/header';
import MainFooter from '@components/footer'
import VideosList from '@components/videos-list'
import VideoSingle from '@components/video-single'
import RegisterVideo from '@components/register-video'
import { headerHeight, footerHeight } from '@utils/constants'

import 'normalize.css'
import 'milligram'


function App({ isRegisterVideoFormOpened }) {
  return (
    <Fragment>
      <GlobalStyle />
      <Container>
        <Header />
      
        <Main>
          {isRegisterVideoFormOpened && <RegisterVideo />}
          <VideoSingle />
          <VideosList />
        </Main>

        <MainFooter />
      </Container> 
    </Fragment>
  )
}

  const Main = styled.main`
    min-height: calc(100% - ${headerHeight} - ${footerHeight});
    background: pink;
`
  const Container = styled.div`
    height: 100%
`
const mapStateToProps = (state) => ({
  isRegisterVideoFormOpened: state.ui.isRegisterVideoFormOpened,
})

export default connect(mapStateToProps)(App);
