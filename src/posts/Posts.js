import { Box, Grid, Pagination, Stack, Typography } from '@mui/material'
import React from 'react'
import Postcards from './Postcards'

const Posts = () => {
  return (
    <Box>
        <Typography variant='h4' align='center'>{" "}
        Latest Receipe {" "}</Typography>
        {/* manage all cards into vertically shape */}
        <Grid container columnSpacing={{xs:0,sm:1,md:1}} direction={'column'}>
            {/* add screens */}
            <Grid item md={6} sm={6}>
                <Postcards myDirection={'flex'}/>
            </Grid>
            <Grid item md={6} sm={6}>
                <Postcards  myDirection={'flex'}/>    
            </Grid>
            <Grid item md={6} sm={6}>
                <Postcards  myDirection={'flex'}/>    
            </Grid>
        </Grid>
        <Typography
            variant='h4'
            bgcolor='black'
            color='white'
            align='center'
            mt={4}
            mb={4}>Most Popular
        </Typography>

        <Grid container columnSpacing={{xs:0,sm:1,md:1}} direction={'row'}>
            {/* add screens */}
            <Grid item md={6} sm={6}>
                <Postcards myDirection={'block'}/>
            </Grid>
            <Grid item md={6} sm={6}>
                <Postcards  myDirection={'block'}/>    
            </Grid>
            <Grid item md={6} sm={6}>
                <Postcards  myDirection={'block'}/>    
            </Grid>
        </Grid>
        {/* add pagination is belong from 1 dimention so use stack mui component */}
        <Stack spacing={2} mt={2} mb={2} justifyContent={'center'} alignItems={'center'}>
            <Pagination count={10} color='warning'/>
        </Stack>
        
    </Box>
  )
}

export default Posts
