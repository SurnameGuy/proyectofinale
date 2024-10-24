import React from 'react';
import { Box } from '@mui/material'
import ButtonX from './Components/ButtonX.jsx'
import Text from './Components/Text.jsx'
import './Styles/App.css'
import CarrosselImagens from './Components/CarrosselImagens.jsx'

function HomePage() {
    return (
        <Box bgcolor="#2596be" height="100vh" display="flex" flexDirection="column" width="100vw">
            <Box display="flex" flexDirection="column" padding="10px" width="100%" position="absolute">
                <Text align="center" size="18px" color="white">Conheça a história da cidade de Araraquara e suas tradições.</Text>
                <CarrosselImagens/>
            </Box>
            <Box marginTop="260px" display="flex" flexDirection="row" width="300px" height="300px">
                <ButtonX size="200px" bgColor="green" fontColor="yellow">Filho teste 123</ButtonX>
                <ButtonX size="200px" bgColor="red" fontColor="white">Criança teste 123</ButtonX>
            </Box>
            <Box position="fixed" top="50%" right="0" width="fit-content" height="fit-content" display="flex" flexDirection="column" backgroundColor="transparent">
                <ButtonX>MENU</ButtonX>
            </Box>
        </Box>
    )
}

export default HomePage;