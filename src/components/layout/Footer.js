import React from 'react';
import { Typography, Box } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 10,
        py: 3,
        textAlign: 'center',
        bgcolor: '#f7f7f7',
        borderTop: '1px solid #e0e0e0',
        color: 'text.secondary',
      }}
    >
      <Typography variant="body2" fontWeight={500}>
        پروژه وبلاگ با GraphQL | ساخته شده با عشق توسط حسام ♥
      </Typography>
      <Typography variant="caption" color="text.disabled" mt={1} display="block">
        © {new Date().getFullYear()} Hesam Blog. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
