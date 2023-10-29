import { Box, Container, Grid, Typography, styled } from '@mui/material'
import breakfast from  '../../static/breakfast.jpg'
import burger from  '../../static/burger.jpg'
import burger1 from  '../../static/burger1.jpg'
import appetizer from  '../../static/appetizer.jpg'
const Hero = () => {
    
    const StyledCard = styled(Box)(({theme})=>({
        display:'flex',
        justifyContent:'center',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        //height:400, /* dont put like this instead of use below one*/
        //height:{sx:200,md:400}, /* another option using material ui usint theme */
        cursor:"pointer",
        // for height we use material ui theme option up for above md and down for sm screens
        [theme.breakpoints.up('md')]:{
          height:400,
        },
        [theme.breakpoints.down('sm')]:{
          height:200,
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
      color:'white',
      backgroundColor:'tomato',
      fontSize:20,
    })

    const StyledWrapper = styled(Box)(({theme})=>({
      [theme.breakpoints.up('md')]:{
        paddingTop:'140%',
      },
      [theme.breakpoints.down('md')]:{ /* there is no need to set sm, md is ok please see changes on your mobile device vertically and horizontally*/
        paddingTop:'40%',
      },
      width:'80%'
    }));

    return (
    // add grid view row - horizontal elements, columns-  vertical elelments
    <Container>
        {/* columnSpacing for columns between two grid item */}
        {/* rowSpacing for rows between two grid item */}
      <Grid container direction={'row'} columnSpacing={2} rowSpacing={2}>
        {/* total 4 images for that 3+3+3+3=12, 4 items shows, screen size bydefault is 12*/}
        <Grid item md={3} xs={6}>
            {/* `url not used single or double qoute its button below esc on your keyboard */}
            <StyledCard sx={{backgroundImage:`url(${breakfast})`}}>
            {/* wrapping text Title */}
            <StyledWrapper>
                {/* Title on image  */}
                <StyledTypography> 
                  breakfast
                </StyledTypography>
              </StyledWrapper>
            </StyledCard>
        </Grid>
        {/*  xs={6} is used for small screen and 6+6=12, 2 items shows  */}
        <Grid item md={3} xs={6}>
            <StyledCard sx={{backgroundImage:`url(${burger})`}}>
            <StyledWrapper>
                <StyledTypography> 
                  burger
                </StyledTypography>
              </StyledWrapper>
            </StyledCard>
        </Grid>
        <Grid item md={3} xs={6}>
            <StyledCard sx={{backgroundImage:`url(${burger1})`}}>
            <StyledWrapper>
                <StyledTypography> 
                burger1
                </StyledTypography>
              </StyledWrapper>
            </StyledCard>
        </Grid>
        <Grid item md={3} xs={6}>
            <StyledCard sx={{backgroundImage:`url(${appetizer})`}}>
            <StyledWrapper>
                <StyledTypography> 
                appetizer
                </StyledTypography>
              </StyledWrapper>
            </StyledCard>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Hero
