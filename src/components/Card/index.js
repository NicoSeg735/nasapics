import React from 'react'
import {
  Container,
  RoverContainer,
  RoverName,
  PhotoBackground,
  Photo,
  Description,
  TypeDate,
  Title,
  Date
} from './styles'

const Card = () => {
  return (
    <Container>
      <RoverContainer>
        <RoverName>
          <img src='../../icons/camera.svg' alt='camera' />
          <span>Curiosity</span>
        </RoverName>
      </RoverContainer>
      <PhotoBackground>
        <Photo src='../../img/mars.jpg' />
      </PhotoBackground>
      <Description>
        <TypeDate>
          <Title>Earth Date</Title>
          <Date>2022-03-18</Date>
        </TypeDate>
        <TypeDate>
          <Title>Martian Sol</Title>
          <Date>1981</Date>
        </TypeDate>
      </Description>
    </Container>
  )
}

export default Card
