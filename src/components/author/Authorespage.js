import React from 'react'
import { Container, Typography, Box, Avatar, Grid, Link, IconButton, Tooltip } from '@mui/material';
import { useQuery } from "@apollo/client";
import { GitHub, LinkedIn, Twitter } from '@mui/icons-material';
import { GET_AUTHORS_INFO } from "../../Graphql/queris.js";
const author = [
    {
        id: 1,
        name: 'حسام اپیک',
        bio: 'توسعه‌دهنده فرانت و نویسنده مقالات تخصصی برنامه‌نویسی.', 
        github: 'https://github.com/hesamepik',
        linkedin: 'https://linkedin.com/in/hesamepik',
        twitter: 'https://twitter.com/hesamepik',
        avatar:'https://us-west-2.graphassets.com/cmd6uub8j0ehn06n21l080a2i/cmdaa3ad2o4qb07mu75mblmkz'
    }]

    function Authorespage() {
        
        
        const { loading, data, errors } = useQuery(GET_AUTHORS_INFO);
        console.log(data)
        return (
      <Container maxWidth="md" sx={{ mt: 6, mb: 6 ,display:"flex" ,justifyContent:"center"}  }>
        <Typography variant="h4" fontWeight="bold" mb={4} textAlign="center" color="primary.main">
      
        </Typography>
  
        <Grid container spacing={4}>
          {author.map(({ id, name, bio, avatar, github, linkedin, twitter }) => (
            <Grid item xs={12} sm={6} key={id}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  p: 2,
                  borderRadius: 2,
                  boxShadow: 3,
                  bgcolor: 'background.paper',
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'scale(1.03)', boxShadow: 6 },
                }}
              >
                <Avatar src={avatar } alt={name} sx={{ width: 80, height: 80 }} />
                <Box>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mb={1}>
                    {bio}
                  </Typography>
                  <Box>
                    {github && (
                      <Tooltip title="GitHub">
                        <IconButton
                          component={Link}
                          href={github}
                          target="_blank"
                          rel="noopener"
                          size="small"
                          color="inherit"
                        >
                          <GitHub />
                        </IconButton>
                      </Tooltip>
                    )}
                    {linkedin && (
                      <Tooltip title="LinkedIn">
                        <IconButton
                          component={Link}
                          href={linkedin}
                          target="_blank"
                          rel="noopener"
                          size="small"
                          color="inherit"
                        >
                          <LinkedIn />
                        </IconButton>
                      </Tooltip>
                    )}
                    {twitter && (
                      <Tooltip title="Twitter">
                        <IconButton
                          component={Link}
                          href={twitter}
                          target="_blank"
                          rel="noopener"
                          size="small"
                          color="inherit"
                        >
                          <Twitter />
                        </IconButton>
                      </Tooltip>
                    )}
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }
  
  export default Authorespage;