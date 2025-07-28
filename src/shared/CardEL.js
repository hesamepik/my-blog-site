import React from 'react';
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
  Box,
} from '@mui/material';
import { Link } from 'react-router-dom';

function CardEL({ title, slug, author, coverphto }) {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 'rgba(0,0,0,0.1) 0px 4px 12px',
        borderRadius: 4,
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0px 8px 20px rgba(0,0,0,0.15)',
        },
      }}
    >
      {/* تصویر با ارتفاع ثابت */}
      <CardMedia
        component="img"
        image={coverphto?.url}
        alt={slug}
        sx={{
          height: 180,
          objectFit: 'cover',
        }}
      />

      {/* بخش محتوا */}
      <Box flexGrow={1} display="flex" flexDirection="column">
        <CardHeader
          avatar={author?.avatar?.url && <Avatar src={author.avatar.url} />}
          title={
            <Typography variant="subtitle1" fontWeight={700} noWrap>
              {title}
            </Typography>
          }
          subheader={
            author?.name && (
              <Typography variant="body2" color="text.secondary">
                نویسنده: {author.name}
              </Typography>
            )
          }
          sx={{ pb: 0 }}
        />

        <CardContent sx={{ flexGrow: 1 }}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            برای مشاهده جزئیات این مقاله کلیک کنید.
          </Typography>
        </CardContent>
      </Box>

      {/* دکمه پایین */}
      <Divider />
      <CardActions>
        <Link
          to={`/blogs/${slug}`}
          style={{ textDecoration: 'none', width: '100%' }}
        >
          <Button
            variant="contained"
            size="small"
            sx={{
              width: '100%',
              borderRadius: 3,
              textTransform: 'none',
              fontWeight: 600,
            }}
            color="secondary"
          >
            مطالعه مقاله
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default CardEL;
