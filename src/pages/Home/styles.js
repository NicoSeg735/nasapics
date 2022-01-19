import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 100vh;
  height: 100%;
  justify-content: space-between;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px 30px;
  height: 100%;
`

export const Head = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const Title = styled.h1`
  color: white;
  font-family: 'Kanit';
  font-weight: 800;
  font-size: 30px;
  margin: 0;
  line-height: 1em;
`

export const Subtitle = styled.h2`
  color: white;
  font-family: 'Kanit';
  font-weight: 300;
  font-size: 13px;
  text-transform: uppercase;
  margin: 0;
  line-height: 1em;
`
