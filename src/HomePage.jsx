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
            <Box marginTop="260px" display="flex" flexDirection="column" width="100%" height="300px" padding="10px">
                <ButtonX size="200px" bgColor="green" fontColor="yellow">Filho teste 123</ButtonX>
                <ButtonX size="200px" bgColor="red" fontColor="white">Criança teste 123</ButtonX>
                <Text align="left" size="18px" color="white">Este site visa apresentar a cultura de Araraquara, eternalizando as tradições orais e gerais da nossa cidade.</Text>
                <Text align="left" size="18px" color="white">Araraquara, conhecida como Morada do Sol, é uma cidade rica em história, cultura e tradições que atravessam gerações. Este site nasce com o propósito de preservar e compartilhar essa herança única, valorizando as histórias orais, as festas populares, os costumes e as peculiaridades que moldam a identidade araraquarense. Aqui, buscamos reunir relatos, memórias e informações sobre as diversas manifestações culturais da nossa cidade, desde as festas religiosas e folclóricas até as lendas urbanas e ditados populares. É um espaço onde passado e presente se encontram, trazendo à tona a alma de Araraquara e oferecendo às novas gerações um contato genuíno com a nossa essência cultural.</Text>
            </Box>


            <Box position="fixed" top="50%" right="0" width="fit-content" height="fit-content" display="flex" flexDirection="column" backgroundColor="transparent">
                <ButtonX>MENU</ButtonX>
            </Box>
        </Box>
    )
}

export default HomePage;