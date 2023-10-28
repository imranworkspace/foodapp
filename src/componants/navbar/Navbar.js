import React from 'react'
import { AppBar, Box, Toolbar, Typography, styled } from '@mui/material'
import TextField from '@mui/material/TextField';
import MenuIcon from '@mui/icons-material/Menu';

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
        {/* app name */}
        <StyledToolbar>
            <Box flex={{ xs:25, md:1 }}>
                <Typography variant='h4' color={'tomato'}>CodingStrade</Typography>
            </Box>
            {/* menu items */}
            <MenuBox  flex={1} sx={{display:{xs:"none", md:'flex'}}}>
                {MenuItems.map((item)=>(
                    <Typography variant='body2'>{item.Name}</Typography>
                ))}
            </MenuBox>
            {/* search box */}
            <Box flex={1}>
                <TextField sx={{display:{xs:"none", md:'flex'}}} label="search here" variant="outlined" color="warning" />
                {/* add menu icon here  */}
                {/* xs - extra small screen, md - for medium screen */}
                <MenuIcon sx={{ display: {xs:"flex", md:"none"},cursor:"pointer"}}></MenuIcon>
            </Box>
        </StyledToolbar>
  </AppBar>
}

export default Navbar
