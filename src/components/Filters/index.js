import React from 'react'
import { Container, Content } from './styles'

const Filters = () => {
  return (
    <Container>
      <Content>
        <img src='../../../icons/filter.svg' alt='filters' />
        <p>Filters</p>
      </Content>
      <img src='../../../icons/arrow-down.svg' alt='arrow-down' />
    </Container>
  )
}

export default Filters
