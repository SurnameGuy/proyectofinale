import React from 'react';
import { Box } from '@mui/material'
import Text from './Text'

function CardX({ children, bgColor, title, img }) {
    return (
            <Box margin="5px" className="card" padding-left="10px" padding-right="10px" borderRadius="5px" backgroundColor={bgColor}>
                <Text><b>{ title }</b></Text>
                <Box>{ children }</Box>
            </Box>
    )
};

export default CardX;