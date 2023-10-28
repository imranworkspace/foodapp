import React from 'react'
import { AppBar, Box, Toolbar, Typography, styled } from '@mui/material'

const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  })

  const MenuBox = styled(Box)({
    display:'flex',
    gap:30,
    cursor:'pointer'
    })

  const MenuItems = [
    {Name:"Home",Link:'/'},
    {Name:"About us",Link:'#'},
    {Name:"Contact us",Link:'#'},
    {Name:"Subscribe",Link:'#'}]

//   elevation for shadow 0 for no shadow
  return <AppBar color='default' elevation={0}> 

        <StyledToolbar>
            <Box flex={1}>
                <Typography variant='h4' color={'tomato'}>CodingStrade</Typography>
            </Box>
            <MenuBox  flex={1}>
                {MenuItems.map((item)=>(
                    <Typography variant='body2'>{item.Name}</Typography>
                ))}
            </MenuBox>
        </StyledToolbar>
  </AppBar>
}

export default Navbar
