import React from "react";
import { useQuery } from "@apollo/client";
import { GET_POST_COMMENTS } from "../../Graphql/queris.js";

import { Typography, Grid, Box, Avatar } from "@mui/material";

function Coment({ slug }) {
  const { loading, error, data } = useQuery(GET_POST_COMMENTS, {
    variables: { slug },
  });
  console.log(slug)
  


  console.log("slug:", slug);
  console.log("loading:", loading);
  console.log("data:", data);
  console.log("error:", error);

  if (loading) return <p>در حال بارگذاری کامنت‌ها...</p>;
  if (error) return <p>خطا در دریافت کامنت‌ها: {error.message}</p>;

  if (!data || !data.comments || data.comments.length === 0) {
    return <p>هیچ کامنتی وجود ندارد.</p>;
  }

  return (
    <Grid
    container
    sx={{
      boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
      borderRadius: 4,
      py: 1,
      mt: 8,
    }}
  >
    <Grid item xs={12} m={2}>
      <Typography component="p" variant="h6" fontWeight={700} color="primary">
        کامنت ها
      </Typography>
      {data.comments.map((comment) => (
        <Grid
          item
          xs={12}
          key={comment.id}
          m={2}
          p={2}
          border="1px silver solid"
          borderRadius={1}
        >
          <Box component="div" display="flex" alignItems="center" mb={3}>
            <Avatar>{comment.name[0]}</Avatar>
            <Typography component="span" variant="p" fontWeight={700} mr={1}>
              {comment.name}
            </Typography>
          </Box>
          <Typography component="p" variant="p">
            {comment.text}
          </Typography>
        </Grid>
      ))}
    </Grid>
  </Grid>
  );
}

export default Coment;
