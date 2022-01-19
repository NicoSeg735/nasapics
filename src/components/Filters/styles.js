import styled from 'styled-components'
import { colors } from '../../theme'

export const Container = styled.div`
  background: ${colors.black};
  border-radius: 8px;
  color: white;
  display: flex;
  font-family: 'Kanit';
  position: relative;
  z-index: 10;
`

export const Head = styled.div`
  text-transform: uppercase;
  font-size: 13px;
  cursor: pointer;
  height: 45px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  border-radius: 8px;
  background: ${props => (props.active ? colors.blue : colors.black)};
  gap: 15px;
  z-index: 11;
`

export const TitleButton = styled.div`
  display: flex;
  gap: 8px;
`

export const Menu = styled.div`
  width: 100%;
  position: absolute;
  top: 38px;
  left: 0;
  background: ${colors.black};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`

export const Content = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`
