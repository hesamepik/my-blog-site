import { Container, Grid, Typography, Box, Paper } from '@mui/material';
import React from 'react';
import Author from '../author/Author.js';
import Blogess from '../blogs/Blogess.js';

function Home() {
  return (
    <Container maxWidth="lg" sx={{ mt: 6, mb: 8 }}>
      <Typography
        variant="h4"
        component="h1"
        fontWeight={700}
        color="primary.main"
        mb={4}
        textAlign="center"
      >
        وبلاگ حسام
      </Typography>

      <Grid container spacing={3} alignItems="flex-start">
        {/* نویسنده‌ها */}
        <Grid item xs={12} md={4}>
          <Paper
            elevation={4}
            sx={{
              p: 3,
              borderRadius: 3,
              height: '100%',
              boxShadow: 'rgba(0,0,0,0.1) 0px 4px 12px',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'translateY(-6px)',
                boxShadow: 'rgba(0,0,0,0.15) 0px 10px 20px',
              },
            }}
          >
            <Typography
              component="h2"
              variant="h6"
              fontWeight={700}
              mb={3}
              borderBottom={2}
              borderColor="primary.main"
              pb={1}
            >
              نویسنده‌ها
            </Typography>
            <Author />
          </Paper>
        </Grid>

        {/* مقالات */}
        <Grid item xs={12} md={8}>
          <Box>
            <Typography
              component="h2"
              variant="h6"
              fontWeight={700}
              mb={3}
              borderBottom={2}
              borderColor="primary.main"
              pb={1}
            >
              مقالات اخیر
            </Typography>
            <Blogess />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
