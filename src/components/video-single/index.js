import React from 'react'
import styled from 'styled-components'

function VideoSingle() {
  return (
    <Container>
      <Iframe
        title='video-play'
        width="560"
        height="480"
        src="https://www.youtube.com/embed/waAlgFq9Xq8"
        frameborder="0"
        allow="accelerometer;
        autoplay;
        encrypted-media;
        gyroscope;
        picture-in-picture"
        allowfullscreen />
        <Titulo>TItulo</Titulo>    
    </Container>

  )
}

const Container = styled.div`
  display: flex;
  
  justify-content: center;
  flex-direction: column;
`
const Titulo = styled.h1`
  padding: 10px;
`
const Iframe = styled.iframe`
  border: 0;
  width: 100%;
  background: #000;
`
export default VideoSingle
