import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 57px;
  padding: 0 30px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  background: rgb(176, 89, 217);
  background: linear-gradient(
    90deg,
    rgba(176, 89, 217, 1) 0%,
    rgba(0, 112, 243, 1) 100%
  );
`

export const Logo = styled.p`
  color: white;
  font-family: 'Kanit';
  font-weight: 800;
  font-size: 20px;
`
