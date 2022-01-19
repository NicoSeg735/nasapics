import styled from 'styled-components'
import { colors } from '../../theme'

export const Container = styled.button`
  background: ${colors.blue};
  border-style: none;
  color: white;
  border-radius: 5px;
  height: 42px;
  padding: 0 15px;
  font-family: 'Kanit';
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  cursor: pointer;
`
