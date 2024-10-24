import React from 'react';
import { Box } from '@mui/material'
import CardImgX from './Components/CardImgX.jsx'
import Text from './Components/Text.jsx'
import './Styles/App.css'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import './db.json'

function BlogPage() {
    return (
        <Box bgcolor="#2596be" height="100vh" width="100vw">
            <Box display="flex" flexDirection="column" padding="10px" width="100%">
                <Box display="flex" flexDirection="row" sx={{ justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <CardImgX color="black" height="100%" width="100%" buttonLabel="Ler artigo" bgColor="white" title="A história do Lupo asdasd" img="./img/lupo.png">
                        <Text>Teste</Text>
                    </CardImgX>
                    <CardImgX height="100%" width="100%" buttonLabel="Ler artigo" bgColor="white" title="Meu card" img="./img/lupo.png">
                        <Text>Teste</Text>
                    </CardImgX>
                    <CardImgX height="100%" width="100%" buttonLabel="Ler artigo" bgColor="white" title="Meu card" img="./img/lupo.png">
                        <Text>Teste</Text>
                    </CardImgX>
                    <CardImgX height="100%" width="100%" buttonLabel="Ler artigo" bgColor="white" title="Meu card" img="./img/lupo.png">
                        <Text>Teste</Text>
                    </CardImgX>
                    <Box margin="10px" className="card" display="flex" backgroundColor="white" minWidth="70px" minHeight="70px" borderRadius="100%" style={{justifyContent: 'center', alignItems: 'center'}}><ArrowForwardRoundedIcon style={{width: '30px', height: '30px'}}/></Box>
                </Box>
            </Box>
        </Box>
    )
}

export default BlogPage;