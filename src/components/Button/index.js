import React from 'react'
import { Container } from './styles'

const Button = props => {
  const { children } = props
  return <Container>{children}</Container>
}

export default Button
