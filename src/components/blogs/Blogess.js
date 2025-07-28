import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_BLOGS_INFO } from '../../Graphql/queris.js';
import { Grid, Typography, CircularProgress, Box } from '@mui/material';
import CardEL from '../../shared/CardEL.js';

function Blogess() {
  const { loading, error, data } = useQuery(GET_BLOGS_INFO);

  if (loading)
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="50vh">
        <CircularProgress color="secondary" />
      </Box>
    );

  if (error)
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="50vh">
        <Typography color="error">خطا در بارگذاری محتوا!</Typography>
      </Box>
    );

  return (
    <Box px={2} py={4}>
      <Typography variant="h4" mb={4} align="center" fontWeight="bold">
        وبلاگ‌ها
      </Typography>

      <Grid container spacing={3}>
        {data.posts.map((post) => (
     <Grid item xs={12} sm={6} md={4} key={post.id} sx={{ display: 'flex' }}>
     <CardEL {...post} />
   </Grid>
   
     
      
        ))}
      </Grid>
    </Box>
  );
}

export default Blogess;
