import { Box, Container, Stack } from '@mui/material'
import React from 'react'
import Posts from '../posts/Posts'
import Rightbar from '../rightbar/Rightbar'
import Hero from '../componants/hero/Hero'

const Main = () => {
  return (
    // for signle dimention we use stack for post and rightbar content divided screen into row 2
    <>

    <Hero />

    <Container>
        <Stack direction={'row'} spacing={1} mt={3}> 
            <Box flex={3}>
              <Posts /> 
            </Box>

            <Box flex={1} sx={{sx:'none',md:'block'}}>
              <Rightbar />
            </Box>

        </Stack>
    </Container>
    </>
  )
}

export default Main
