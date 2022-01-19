import styled from 'styled-components'
import { colors } from '../../theme'

export const Container = styled.div`
  background: ${colors.black};
  border-radius: 8px;
  color: white;
  height: 45px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Kanit';
  text-transform: uppercase;
  font-size: 13px;
`

export const Content = styled.div`
  display: flex;
  gap: 15px;
`
