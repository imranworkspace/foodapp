import { Box, Card, CardMedia, IconButton, TextField, Typography } from '@mui/material'
import chef from '../static/chef.jpg'
import {Send as SendIcon} from '@mui/icons-material'
const Rightbar = () => {
  return (
    <Box sx={{mt:3}}>
      <Typography variant='h5' align='center'>HEY AM ZUNAISHA</Typography>
      <CardMedia
        component={'img'} 
        image={chef} alt='burger_image'
        sx={{width:'400px',cursor:'pointer',
        

        "&:hover":{
            opacity:0.8,
            boxSizing:'borderBox',
            zIndex:1,
            transition:`all 0.50s ease`,   
          }}}
        />
        <Typography>I love to sing and cook! My best time spend around the Table</Typography>
        <Typography>Don't forget to subscribe FoodApp!</Typography>
        <a href='www.google.com'>Read more</a>
        {/* add 200px height for adds */}
        <Card sx={{height:"200px", marginTop:2}}>
          <Typography>Ads Here</Typography>

        </Card>
        
        <Typography padding={1} align='center' color={'white'} bgcolor={'tomato'} mt={2}>Subscribe Via Email</Typography>
        <Box sx={{paddingLeft:10}}>
            <TextField sx={{mt:2}}
              type='email'
              label='enter email here' 
              variant='outlined' 
              color='warning' />
            <IconButton sx={{mt:2}}>
              <SendIcon sx={{color:'tomato'}} />
            </IconButton>
        </Box>
        {/* add 200px height for adds */}
        <Card sx={{height:"200px", marginTop:2}}>
          <Typography>Ads Here</Typography>

        </Card>
    </Box>
  )
}

export default Rightbar
