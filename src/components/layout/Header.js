import { AppBar, Toolbar, Typography, Container} from '@mui/material'
import React from 'react'
import BookIcon from '@mui/icons-material/Book';
function Header() {
  return (
    <AppBar position='sticky'>
<Container maxWidth="lg">

<Toolbar>
    <Typography component="h1" variant='h5' fontWeight="700" flex={1}>وبلاگ حسام </Typography>
    <BookIcon />
</Toolbar>

</Container>
    </AppBar>
  )
}

export default Header
