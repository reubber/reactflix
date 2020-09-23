import React from 'react'
import styled from 'styled-components'

function RegisterVideo() {
  return (
    <Form>
      <h2>cadastrar video</h2>
      <label htmlFor='id'>id do video</label>
      <input type='text' id='id' name='id' />

      <label htmlFor='title'>Titulo do video</label>
      <input type='text' id='title' name='title' />

      <button type='submit'>Cadastrar</button>
    </Form>
  )
}
const Form = styled.form`
padding: 10px;
`
export default RegisterVideo
