import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box, CircularProgress, Alert, Divider, Grid } from '@mui/material';
import { GET_POST_INFO } from '../../Graphql/queris.js';
import CommentForm from '../CommentForm/CommentForm.js';
import  Coment from '../CommentForm/Coment.js';

function Blogepage() {
  const { slug } = useParams();
  const { loading, error, data } = useQuery(GET_POST_INFO, {
    variables: { slug },
  });

  if (loading)
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
        <CircularProgress />
      </Box>
    );

  if (error)
    return (
      <Container maxWidth="md" sx={{ mt: 6 }}>
        <Alert severity="error">خطا در بارگذاری مقاله: {error.message}</Alert>
      </Container>
    );

  const post = data?.post;

  if (!post)
    return (
      <Container maxWidth="md" sx={{ mt: 6 }}>
        <Alert severity="warning">مقاله‌ای با این شناسه یافت نشد.</Alert>
      </Container>
    );

  return (
    <Container
      maxWidth="md"
      sx={{
        mt: 6,
        mb: 6,
        p: 4,
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 3,
        direction: 'rtl', // برای راست‌چین کردن متن
      }}
    >
      {/* عنوان مقاله */}
      <Typography variant="h4" component="h1" fontWeight="bold" mb={2} color="primary.main" textAlign="center">
        {post.title || 'عنوان مقاله موجود نیست'}
      </Typography>

      {/* نویسنده */}
      <Typography variant="subtitle1" color="text.secondary" mb={3} textAlign="center">
        نویسنده: {post.author || 'نامشخص'}
      </Typography>

      {/* خط جداکننده */}
      <Divider sx={{ mb: 3 }} />

      {/* تصویر کاور */}
      {post.coverphto?.url && (
        <Box
          component="img"
          src={post.coverphto.url}
          alt="تصویر کاور"
          sx={{ width: '100%', maxHeight: 350, objectFit: 'cover', borderRadius: 2, mb: 4 }}
        />
      )}

      {/* متن مقاله */}
      <Typography
        variant="body1"
        color="text.primary"
        sx={{ lineHeight: 1.7, fontWeight: '700', whiteSpace: 'pre-line' }}
      >
        {post.content?.text || 'متن مقاله موجود نیست'}
      </Typography>
      <Grid item xs={12}>
        <CommentForm slug={slug}/>
      <Grid item xs={12}>
      <Coment slug={slug} />
      </Grid>
     
      </Grid>
    </Container>
  );
}

export default Blogepage;
