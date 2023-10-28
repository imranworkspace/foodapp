import React from 'react'
import { AppBar, Box, Toolbar, Typography, styled } from '@mui/material'

const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  })
  return <AppBar>

        <StyledToolbar>
            <Box>
                <Typography variant='h4' color={'tomato'}>CodingStrade</Typography>
            </Box>
        </StyledToolbar>
  </AppBar>
}

export default Navbar
