import styled from 'styled-components'
import { colors } from '../../theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${colors.black};
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  color: white;
`

export const RoverContainer = styled.div`
  background: rgba(17, 17, 17, 0.6);
  display: flex;
  align-self: flex-start;
  padding: 8px 20px;
  border-bottom-right-radius: 8px;
  position: absolute;
  top: 0;
  left: 0;
`

export const RoverName = styled.div`
  color: white;
  font-family: 'Kanit';
  display: flex;
  gap: 8px;
  text-transform: uppercase;
`

export const PhotoBackground = styled.div`
  height: 130px;
  overflow: hidden;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
`

export const Photo = styled.img`
  height: 100%;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`

export const Description = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-around;
`

export const TypeDate = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.p`
  margin: 0;
  text-align: center;
  font-family: 'Kanit';
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 300;
`

export const Date = styled.p`
  margin: 0;
  text-align: center;
  font-family: 'Kanit';
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 600;
`
