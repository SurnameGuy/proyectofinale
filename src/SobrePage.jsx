import React from 'react';
import { Box } from '@mui/material'
import ButtonX from './Components/ButtonX.jsx'
import Text from './Components/Text.jsx'
import './Styles/App.css'

function SobrePage(){
    return(
        <Box
        padding="10px"
        >
            <Box>
                <h1>Quem somos?</h1>
            </Box>
            <Box>
                Texto explicando quem somos e tal, blá blá blá. Não acho que alguém se importa de verdade.
            </Box>
            <Box>
                <h1>O projeto: Ararahistory</h1>
            </Box>
            <Box>
                Mais texto, mas agora explicando o projeto, o porquê de escolhermos esse tema (por que será?), como foi fazer e mais coisa super divertida e tal. Uau.
            </Box>
        </Box>
    )
    
}

export default SobrePage;