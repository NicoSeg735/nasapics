import React from 'react'
import { Container, Logo } from './styles'

const Navbar = () => {
  return (
    <Container>
      <Logo>NASAPics</Logo>
      <img src='./icons/search.svg' alt='search' />
    </Container>
  )
}

export default Navbar
