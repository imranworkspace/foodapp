import { Box, Button, Card, CardActions, CardContent, CardMedia, Link, Typography } from '@mui/material'
import React from 'react'
import burger from '../static/burger.jpg'
const Postcards = () => {
  return (
    <Box mt={3}>
        <Link href='#' sx={{textDecoration:'none'}}>
            <Card>
                <Box sx={{display:'flex',flexDirection:'row'}}>
                    <CardMedia 
                        component={'img'} 
                        image={burger} alt='burger_image'
                        sx={{width:'400px',cursor:'pointer',
                        

                        "&:hover":{
                            opacity:0.8,
                            boxSizing:'borderBox',
                            zIndex:1,
                            transition:`all 0.50s ease`,   
                          }}}
                    />
                    {/* card content mui used for margin,padding other properties for above card */}
                    <CardContent>
                        <Typography gutterBottom variant='h4' align='center'>
                            Yummy burger 
                        </Typography>
                        <Typography variant="h5" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                        <CardActions>
                            <Button sx={{color:'tomato'}} size='large'>Share</Button>
                            <Button sx={{color:'tomato'}} size='large'>Learn More</Button>
                        </CardActions>
                    </CardContent>
                    
                </Box>
            </Card>
        </Link>
    </Box>
  );
}

export default Postcards