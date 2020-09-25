import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { registerVideo } from '@reducers/videos/action-creators'

function RegisterVideo({ onSubmit }) {
  return (
    <Form onSubmit={onSubmit}>
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
const mapDispatchToProps = (dispatch) => ({
  onSubmit: async (e) => {
    e.preventDefault()
    e.persist()

    const { id, title } = e.target

    await dispatch(registerVideo({
      id: id.value,
      title: title.value
    }))
    e.target.reset()
    e.target[0].focus()
  }
})
export default connect(null, mapDispatchToProps)(RegisterVideo)
