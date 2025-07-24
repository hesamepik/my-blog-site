import React from 'react'
import { useQuery } from '@apollo/client';
import { GET_BLOGS_INFO } from '../../Graphql/queris.js';
import { Grid } from '@mui/material';
import CardEL from '../../shared/CardEL.js'
function Blogess() {
    const {loading, error, data} = useQuery(GET_BLOGS_INFO);
    console.log(data)
    
  if (loading) return <h4>loading...</h4>;

  if (error) return <h4>Error...</h4>;

  return (
    <Grid container spacing={2}>
{data.posts.map((post)=>(

<Grid item sx={12} sm={4} md={4} key={post.id}>
<CardEL {...post} />
</Grid>





))}

    </Grid>
  )
}

export default Blogess