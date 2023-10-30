import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Postcards from './Postcards'

const Posts = () => {
  return (
    <Box>
        <Typography variant='h4' align='center'>{" "}
        Latest Receipe {" "}</Typography>
        {/* manage all cards into vertically shape */}
        <Grid container columnSpacing={{xs:0,sm:1,md:1}} direction={'column'}>
            <Grid item sx>
                <Postcards />
            </Grid>
            <Grid item sx>
                <Postcards />    
            </Grid>
            <Grid item sx>
                <Postcards />    
            </Grid>
        </Grid>
    </Box>
  )
}

export default Posts
