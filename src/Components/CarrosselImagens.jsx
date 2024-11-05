import React from 'react';
import { Box } from '@mui/material'
import ButtonX from './ButtonX.jsx'
import Text from './Text.jsx'
import '../Styles/App.css'

function CarrosselImagens() {
    return (
        <div class="carousel">
            <div class="carousel-inner">
                <div class="carousel-item"><img className="imagemScrollavel" src="./img/aqa1.jpg" /></div>
                <div class="carousel-item"><img className="imagemScrollavel" src="./img/aqa2.jpg" /></div>
                <div class="carousel-item"><img className="imagemScrollavel" src="./img/aqa3.jpe" /></div>
                <div class="carousel-item"><img className="imagemScrollavel" src="./img/aqa4.jpg" /></div>
                <div class="carousel-item"><img className="imagemScrollavel" src="./img/aqa5.jpg" /></div>
                <div class="carousel-item"><img className="imagemScrollavel" src="./img/aqa6.jpe" /></div>
                <div class="carousel-item"><img className="imagemScrollavel" src="./img/aqa7.webp" /></div>
                {/* Mais itens do carrossel aqui */}
                <div class="carousel-item"><img className="imagemScrollavel" src="./img/aqa1.jpg" /></div>
                <div class="carousel-item"><img className="imagemScrollavel" src="./img/aqa2.jpg" /></div>
                <div class="carousel-item"><img className="imagemScrollavel" src="./img/aqa3.jpe" /></div>
                <div class="carousel-item"><img className="imagemScrollavel" src="./img/aqa4.jpg" /></div>
                <div class="carousel-item"><img className="imagemScrollavel" src="./img/aqa5.jpg" /></div>
                <div class="carousel-item"><img className="imagemScrollavel" src="./img/aqa6.jpe" /></div>
                <div class="carousel-item"><img className="imagemScrollavel" src="./img/aqa7.webp" /></div>
            </div>
        </div>
        /*<Box className="carrossel" display="flex" flexDirection="row" height="30px" >
                <Box className="carrosselComeco">
                    <img className="imagemScrollavel" src="./img/aqa1.jpg" />
                    <img className="imagemScrollavel" src="./img/aqa2.jpg" />
                    <img className="imagemScrollavel" src="./img/aqa3.jpe" />
                    <img className="imagemScrollavel" src="./img/aqa4.jpg" />
                    <img className="imagemScrollavel" src="./img/aqa5.jpg" />
                    <img className="imagemScrollavel" src="./img/aqa6.jpg" />
                    <img className="imagemScrollavel" src="./img/aqa7.webp" />
                </Box>

                <Box className="carrosselFinal">
                    <img className="imagemScrollavel" src="./img/aqa1.jpg" />
                    <img className="imagemScrollavel" src="./img/aqa2.jpg" />
                    <img className="imagemScrollavel" src="./img/aqa3.jpe" />
                    <img className="imagemScrollavel" src="./img/aqa4.jpg" />
                    <img className="imagemScrollavel" src="./img/aqa5.jpg" />
                    <img className="imagemScrollavel" src="./img/aqa6.jpg" />
                    <img className="imagemScrollavel" src="./img/aqa7.webp" />
            </Box>
    </Box>*/
    )
}

export default CarrosselImagens;