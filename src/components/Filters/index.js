import React from 'react'
import {
  Container,
  Head,
  TitleButton,
  Menu,
  Content,
  ButtonGroup
} from './styles'
import Checkbox from '../Checkbox'
import Button from '../Button'

const Filters = () => {
  return (
    <Container>
      <Head active>
        <TitleButton>
          <img src='../../../icons/filter.svg' alt='filters' />
          <p>Filters</p>
        </TitleButton>
        <img src='../../../icons/arrow-down.svg' alt='arrow-down' />
      </Head>
      <Menu>
        <Content>
          <Checkbox />
          <ButtonGroup>
            <Button>Clean</Button>
            <Button>Apply</Button>
          </ButtonGroup>
        </Content>
      </Menu>
    </Container>
  )
}

export default Filters
