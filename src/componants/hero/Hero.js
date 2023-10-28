import { Box, Container, Grid, styled } from '@mui/material'
import breakfast from  '../../static/breakfast.jpg'
const Hero = () => {
    
    const StyledCard = styled(Box)({
        display:'flex',
        justifyContent:'center',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        height:400,
    })

    return (
    // add grid view row - horizontal elements, columns-  vertical elelments
    <Container>
        {/* columnSpacing for columns between two grid item */}
        {/* rowSpacing for rows between two grid item */}
      <Grid container direction={'row'} columnSpacing={2} rowSpacing={2}>
        {/* total 4 images for that 3+3+3+3=12, 4 items shows, screen size bydefault is 12*/}
        <Grid item md={3} xs={6}>
            {/* `url not used single or double qoute its button below esc on your keyboard */}
            <StyledCard sx={{backgroundImage:`url(${breakfast})`}}></StyledCard>
        </Grid>
        {/*  xs={6} is used for small screen and 6+6=12, 2 items shows  */}
        <Grid item md={3} xs={6}>
            <StyledCard sx={{backgroundImage:`url(${breakfast})`}}></StyledCard>
        </Grid>
        <Grid item md={3} xs={6}>
            <StyledCard sx={{backgroundImage:`url(${breakfast})`}}></StyledCard>
        </Grid>
        <Grid item md={3} xs={6}>
            <StyledCard sx={{backgroundImage:`url(${breakfast})`}}></StyledCard>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Hero
