import React from 'react';
import { Box } from '@mui/material'
import './Text.css'

function Text({ children , size , color, align }) {
  return (
    <Box textAlign={align} display="flex" margin="0px" padding="0px" fontSize={size} style={{color}}>
      <p fontFamily="Poppins">{children}</p>
    </Box>
  )
};

export default Text;