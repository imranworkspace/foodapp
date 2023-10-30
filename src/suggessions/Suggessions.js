import { Box, Stack, Typography, styled } from '@mui/material';
import dinner from '../static/dinner.jpg'
import dessert from '../static/dessert.jpg'
import drinks from '../static/drinks.jpg'
import healthy from '../static/healthy.jpg'
import instant from '../static/instant.jpg'
import meat from '../static/meat.jpg'


const Suggessions = () => {
    const StyledCard = styled(Box)(({theme})=>({
        display:'flex',
        justifyContent:'center',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',

        // for rectangle card we set below properties remove borderRadius
        overflow:'hidden',
        width:'100px',


        //height:400, /* dont put like this instead of use below one*/
        //height:{sx:200,md:400}, /* another option using material ui usint theme */
        cursor:"pointer",
        // for height we use material ui theme option up for above md and down for sm screens
        [theme.breakpoints.up('md')]:{
          height:100,
        },
        [theme.breakpoints.down('md')]:{
          height:100,
        },
        "&:hover":{
          opacity:0.8,
          boxSizing:'borderBox',
          zIndex:1,
          transition:`all 0.45s ease`,   
        }
    }));

    const StyledTypography = styled(Typography)({
      textAlign:'center',
      color:'black',
      fontSize:20,
    })

    // creating Box for our circle card with style prop
    const CardBox = styled(Box)({
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
    })


  return (
    // for single dimention we use Stack instead of Container from material ui
    <Stack Container justifyContent={'center'} alignItems={'center'} direction={'row'} mt={4} spacing={3} ml={3} sx={{overflow:'auto'}}>  
      <CardBox>
      <StyledCard sx={{backgroundImage:`url(${dinner})`}} />
        <StyledTypography>
        dinner
        </StyledTypography>
      </CardBox>

      <CardBox>
      <StyledCard sx={{backgroundImage:`url(${drinks})`}} />
        <StyledTypography>
        drinks
        </StyledTypography>
      </CardBox>

      <CardBox>
      <StyledCard sx={{backgroundImage:`url(${instant})`}} />
        <StyledTypography>
        instant
        </StyledTypography>
      </CardBox>

      <CardBox>
      <StyledCard sx={{backgroundImage:`url(${meat})`}} />
        <StyledTypography>
        meat
        </StyledTypography>
      </CardBox>
    
      <CardBox>
      <StyledCard sx={{backgroundImage:`url(${dessert})`}} />
        <StyledTypography>
        dessert
        </StyledTypography>
      </CardBox>

      <CardBox>
      <StyledCard sx={{backgroundImage:`url(${healthy})`}} />
        <StyledTypography>
        healthy
        </StyledTypography>
      </CardBox>

    </Stack>
  )
}

export default Suggessions
