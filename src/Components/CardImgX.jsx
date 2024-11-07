import React from 'react';
import { Box } from '@mui/material';
import Text from './Text.jsx';
import './Card.css';
import ButtonX from './ButtonX.jsx';

function CardImgX({ children, height, width, color, bgColor, title, buttonLabel, img }) {
    return (
        <Box margin="10px" maxHeight="400px" minHeight="400px" width={width} className="card" borderRadius="5px" backgroundColor={bgColor} position="relative">
            <Box>
                <Box className="cardImg">
                    <img className="cardImg" src={img} alt={title} />
                </Box>
                <Box>
                    <Box padding="5px">
                        <Text color={{ color }}><b>{title}</b></Text>
                        <Text color={{ color }}>{children}</Text>
                    </Box>
                    <Box padding="5px" width="100%" paddingBottom="5px" position="absolute" bottom="0">
                        <ButtonX>{buttonLabel}</ButtonX>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default CardImgX;