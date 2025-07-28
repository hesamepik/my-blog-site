import { AppBar, Toolbar, Typography, Container, IconButton } from '@mui/material';
import React from 'react';
import BookIcon from '@mui/icons-material/Book';

function Header() {
  return (
    <AppBar
      position="sticky"
      elevation={2}
      sx={{
        backgroundColor: '#fff',
        color: '#333',
        borderBottom: '1px solid #eee',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar>
          <Typography
            component="h1"
            variant="h6"
            fontWeight={800}
            sx={{
              flexGrow: 1,
              cursor: 'pointer',
              '&:hover': { color: 'secondary.main' },
              fontFamily: 'inherit',
            }}
          >
            وبلاگ حسام
          </Typography>

          <IconButton edge="end" color="inherit">
            <BookIcon sx={{ fontSize: 28 }} />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
