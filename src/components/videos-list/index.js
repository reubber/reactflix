import React from 'react'
import styled from 'styled-components'
import Play from '../play'

function VideosList() {

  return (
      <Container>
        {Array.from({ length:10 }).map((item, index) => (
          <Video key={index}>
            <VideoThumb>
              <PlayStyled />
            </VideoThumb> 
            <VideoTitle>Titulo do video</VideoTitle>
          </Video>
        ))}
      </Container> 
  )
}
//${video} ira redenrizar componente de video qndo ele estiver dentro do container,
//entao eu quero q ele tenha esse estilo..
const PlayStyled = styled(Play)`
  fill: #999;
  width: 150px;
  height: 50px;
  transition: all .25s ease-in-out;
`
const Video = styled.section`
  &:hover ${PlayStyled} {
    transform: scale(1.3);
  }
`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  & ${Video} {      
    flex: 1 1 300px;
    margin: 0 5px 5px;
  }
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

export default VideosList
