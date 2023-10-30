import { Box, CardMedia, Container, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React from 'react'
import Category from '../componants/category/Category'
import burger1 from "../static/burger1.jpg"
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
const Detailspage = () => {
  return (
    <Container>
      <Category />
      <Typography variant='h3' align='center' mt={4}>
        Title of Receipe
      </Typography>
      <Typography variant='body2' color={'GrayText'} align='center'  p={3}>
        read by disclosure policy  the printing and typesetting industry.
      </Typography>
      <Box sx={{display:'flex',justifyContent:'center'}}>
        <CardMedia 
            sx={{
                height:'500px',width:'500px'}}
                variant='img' 
                image={burger1} 
                alt="burger_image"
        /> 
      </Box>
      <Typography variant='body1' align='center'  m={2}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
      </Typography>
      <Typography variant='h3' align='center' mb={1}>
        Ingrediants
        </Typography>

      {/* add listitems */}
      <List>
        <ListItemButton>
            <ListItemIcon>
                    <DoubleArrowIcon/>
            </ListItemIcon>
            <ListItemText primary='Menu' />
        </ListItemButton>

        <ListItemButton>
            <ListItemIcon>
                    <DoubleArrowIcon/>
            </ListItemIcon>
            <ListItemText primary='Burger Onion' />
        </ListItemButton>

        <ListItemButton>
            <ListItemIcon>
                    <DoubleArrowIcon/>
            </ListItemIcon>
            <ListItemText primary='Burger Bread' />
        </ListItemButton>

        <ListItemButton>
            <ListItemIcon>
                    <DoubleArrowIcon/>
            </ListItemIcon>
            <ListItemText primary='Burger Souce' />
        </ListItemButton>

        <ListItemButton>
            <ListItemIcon>
                    <DoubleArrowIcon/>
            </ListItemIcon>
            <ListItemText primary='Onion' />
        </ListItemButton>
      </List>

      <Typography variant='body1' align='center'  m={2}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
      </Typography>
      <Typography variant='h5' align='center' mb={1} bgcolor={'black'} color={'white'}>
        You may also like !!!
        </Typography>

    </Container>
  )
}

export default Detailspage
