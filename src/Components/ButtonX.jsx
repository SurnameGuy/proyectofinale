import React from 'react';
import { Box } from '@mui/material'
import { Button } from '@mui/material'

function ButtonX({ children , size , bgColor , fontColor }) {
  return (
    <Box width={size}>
      <Button fullWidth variant="contained" style={{backgroundColor: bgColor, color: fontColor}}>{children}</Button>
    </Box>
  )
};

export default ButtonX;