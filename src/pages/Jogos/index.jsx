import './style.css'
import NavbarPadrao from '../../components/navbar'
import FooterPadrao from '../../components/footer'
import { Link } from 'react-router-dom'
import Topo from "../../components/ComponenteEscrolaPraCima"

function Jogos(){
    return(
        <>

        <Topo/>

        <NavbarPadrao />
        
        <section className='imgPrincipalTelaJogos'>
            {/*A imagem vai como background dessa section*/}
        </section>

        <section className='TxtApresentaçãoJogos'>
            <p>Com diversão e jogos, ajudamos as crianças a enxergarem o mundo com clareza – porque o primeiro passo para um olhar mais nítido começa com a descoberta!</p>
        </section>

        <section className='seccaoPrimeiroJogo'>
            <div className='imgJogo01'></div>
            <div className='conteudoJogo01'>
                <div className="descjogo01Jogo">
                    <p className='textDescJogos01'>Pequeno explorador  
                    você está prestes a entrar em um mundo cheio de <strong>Letras Secretas</strong>. </p>
                    <p className='textDescJogos02'>
                    Um jogo divertido para ajudar você a reconhecer o alfabeto de forma rápida e emocionante.</p>
                </div>
                {<Link to={"/DesafioLetras"} className='btnsJogos'>O DESAFIO DAS LETRAS</Link>}
            </div>
        </section>

        <section className='seccaoSegundoJogo'>
            <div className='conteudoJogo01'>
                <div className="descjogo01Jogo">
                    <p className='textDescJogos01'>Prepare-se para uma aventura em <strong>Fotografia Florestal</strong>.</p>
                    <p className='textDescJogos02'> Como o fotógrafo mais corajoso, sua missão é capturar os animais incríveis que se escondem por lá. Pegue sua câmera, porque cada clique é uma nova descoberta!</p>
                </div>
                {<Link to={"/FotografiaFlorestal"} className='btnsJogos'>FOTOGRAFIA FLORESTAL</Link>}
                
            </div>
            <div className='imgJogo02'></div>
        </section>

        <section className='seccaoTerceiroJogo'>
            <div className='imgJogo03'></div>
            <div className='conteudoJogo01'>
                <div className="descjogo01Jogo">
                    <p className='textDescJogos01'>Os reis precisam de sua ajuda para encontrar um impostor entre os soldados!</p>
                    <p className='textDescJogos02'>Observe bem as cores das roupas e descubra quem está usando uma cor diferente, como alguém de <strong>Fora do Reino</strong>. Boa sorte na missão!</p>
                </div>
                {<Link to={"/foraDoMeuReino"} className='btnsJogos'>FORA DO MEU REINO</Link>}
            </div>
        </section>
        
        <section className='seccaoQuartoJogo'>
            <div className='conteudoJogo01'>
                <div className="descjogo01Jogo">
                    <p className='textDescJogos01'>Bem-vindo, Pequeno Viajante das Estrelas! Prepare-se para uma aventura pelo espaço! </p>
                    <p className='textDescJogos02'>Agarre-se a uma estrela e viaje em <strong>Uma Jornada</strong> entre planetas coloridos, cometas brilhantes e constelações misteriosas.</p>
                </div>
                {<Link to={"/JornadaEstrela"} className='btnsJogos'>JORNADA COM A ESTRELA</Link>}
                
            </div>
            <div className='imgJogo04'></div>
        </section>

        <FooterPadrao/>
        </>
    )
}

export default Jogos