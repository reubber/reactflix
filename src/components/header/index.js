import React from 'react'
import styled from 'styled-components'
import { headerHeight } from '@utils/constants'

function header () {
    return (
			<Header>
				<HeaderTitle>Reactflix</HeaderTitle>
				<RegisterButton>Cadastrar video</RegisterButton>
			</Header>
    )
}

const Header = styled.header`
	align-items: center;
	height: ${headerHeight};
	background: #333;
	padding: 0 10px;
	display: flex;
	justify-content: space-between;
`

const HeaderTitle = styled.h1`
	color: #fff;
	margin-bottom: 0;
`

const RegisterButton = styled.button`
	margin-bottom: 0;
`

export default header
