import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, Content, Title, Subtitle, Head } from './styles'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Filters from '../../components/Filters'
import Card from '../../components/Card'

const Home = () => {
  const [list, setList] = useState('')

  useEffect(() => {
    // axios
    //   .get(
    //     `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=9zBzrWd0mNtMHebZgHefF3XLSE97Vfyt10pxXb7V`
    //   )
    //   .then(res => {
    //     console.log(res)
    //   })
  }, [])

  return (
    <Container>
      <div>
        <Navbar />
        <Content>
          <Head>
            <Subtitle>Showing photos from</Subtitle>
            <Title>Mars Rover</Title>
          </Head>
          <Filters />
          <Card />
        </Content>
      </div>
      <Footer />
    </Container>
  )
}

export default Home
