import React, { useState } from 'react'
import { AppBar, Box, Drawer, List, ListItem, ListItemButton, Toolbar, Typography, styled } from '@mui/material'
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


  const [openMenu,setOpenMenu] = useState(false)  

//   elevation for shadow 0 for no shadow
  return  (
  <>
    <AppBar color='default' position='sticky' elevation={0}> 
          {/* app name */}
          <StyledToolbar>
              <Box flex={{ xs:25, md:1 }}> 
              {/* add alignment for small and md screens using textAlign prop */}
                  <Typography variant='h4' color={'tomato'}  sx={{fontFamily: 'Splash, cursive'}} textAlign={{xs:"center",md:"left"}}>FoodApp</Typography>
              </Box>
              {/* menu items */}
              <MenuBox  flex={1} sx={{display:{xs:"none", md:'flex'}}}>
                  {MenuItems.map((item)=>(
                      <Typography variant='body2'>{item.Name}</Typography>
                  ))}
              </MenuBox>
              {/* search box */}
              <Box flex={1}>
                {/* add search box for medium and big screen */}
                  <TextField sx={{display:{xs:"none", md:'flex'}}} label="search here" variant="outlined" color="warning" />
                  {/* add menu icon here  */}
                  {/* xs - extra small screen, md - for medium screen */}
                  <MenuIcon sx={{ display: {xs:"flex", md:"none"},cursor:"pointer"}}
                  onClick={()=>setOpenMenu(!openMenu)}></MenuIcon>
              </Box>
          </StyledToolbar>
          {/* add drawer */}
          <Drawer
          //  open close drawer action here 
            anchor={"top"} open={openMenu} onClose={()=>setOpenMenu(!openMenu)}
          >
            {/* items of drawer */}
            <List>
              <ListItem>
              {MenuItems.map((item)=>(
                      <ListItemButton variant='body2'>{item.Name}</ListItemButton>
                  ))}
              </ListItem>
            </List>
            {/* add search box for small screen */}
            <TextField sx={{display:{xs:"flex", md:'none'}}} label="search here" variant="outlined" color="warning" />
          </Drawer>
          
    </AppBar>
    {/* add Main Title below drawer  */}
    <Box sx={{display:'flex',justifyContent:'center',flexDirection: {xs:'column',md:'row'},padding:1}}> 
      <Typography align='center' variant='h5' mr={{xs:0,md:1}}>Simple Receipe for Coders</Typography>
      <Typography variant='h5' color={'tomato'} align='center' sx={{fontFamily: 'Splash, cursive'}}>Simple Receipe for Coders</Typography>
    </Box>
  </>
);
};
export default Navbar
