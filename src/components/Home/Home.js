import { Container, Grid, Typography, Box } from '@mui/material'
import React from 'react'
import Author from "../author/Author.js"
import Blogess from '../blogs/Blogess.js'

function Home() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', md: 'row' }, mt: 4 }}>
        {/* نویسنده‌ها */}
        <Box sx={{ flex: '1', maxWidth: { md: '25%' } }}>
          <Typography component="h3" variant="h5" mb={3} fontWeight={700}>
            نویسنده‌ها
          </Typography>
          <Author />
        </Box>

        {/* مقالات */}
        <Box sx={{ flex: '3' }}>
          <Typography component="h3" variant="h5" mb={3} fontWeight={700}>
            مقالات
          </Typography>
          <Blogess />
        </Box>
      </Box>
    </Container>
  )
}

export default Home
