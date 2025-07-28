import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Alert } from '@mui/material';
import { useMutation } from '@apollo/client';
import { SEND_COMMENT } from "../../Graphql/mutations";
import { ToastContainer, toast } from 'react-toastify';
function CommentForm({ slug }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, settext] = useState('');

  const [sendComment, { loading, data}] = useMutation(SEND_COMMENT,{variables:{name,email,text,slug}});
  console.log(data)
  const sendhand=()=>{
    if(name && email && text){

      sendComment()
      
    }else{
     toast.warn("تمام فیلد هارو پر کن ",{position:"top-center"})
    }
  }
if(data){
  toast.success("کامنت ارسال شد و متنظر تایید از سمت سرور باشد ",{position:"top-center"})
}
  

  return (
    <Box
      component="form"
  
      sx={{
        maxWidth: 600,
        mx: 'auto',
        mt: 4,
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
        bgcolor: 'background.paper',
      }}
    >
      <Typography variant="h5" fontWeight="bold" mb={3} textAlign="center">
        ارسال نظر
      </Typography>

      


      <TextField
        label="نام"
        variant="outlined"
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        sx={{ mb: 2 }}
      />

      <TextField
        label="ایمیل"
        variant="outlined"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        type="email"
        sx={{ mb: 2 }}
      />

      <TextField
        label="متن نظر"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        value={text}
        onChange={(e) => settext(e.target.value)}
        required
        sx={{ mb: 3 }}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        disabled={loading}
        onClick={sendhand}
      >
        {loading ? 'در حال ارسال...' : 'ارسال'}
      </Button>
      <ToastContainer/>
    </Box>
  );
}

export default CommentForm;
