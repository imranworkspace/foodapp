import { Box, Container, Stack, Typography, styled } from '@mui/material'

const Footer = () => {

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

        
  return (
    // to set specific height we use box here
    <Box height={200} bgcolor={'tomato'} color={'white'}>
        <Container>
        <Stack direction={'row'}>
            {/* menu items */}
            <MenuBox  flex={2} sx={{display:{xs:"none", md:'flex'}}}>
                  {MenuItems.map((item)=>(
                      <Typography variant='body2'>{item.Name}</Typography>
                  ))}
              </MenuBox>
              {/* add another horizontal box  */}
              <Box flex={1} mt={1} color={'white'}>
                2023 foodapp with imran
              </Box>
        </Stack>
        </Container>
    </Box>
  )
}

export default Footer
