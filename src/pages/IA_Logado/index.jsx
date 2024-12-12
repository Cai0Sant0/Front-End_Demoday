import './style.css'
import NavbarPadraoLogado from '../../components/navbarLogado'
import FooterPadraoLogado from '../../components/footerLogado'
import ImgOculos from '../../assets/images/imagemIA/imgOculosIa2.png'
import { Link } from 'react-router-dom'
import Topo from "../../components/ComponenteEscrolaPraCima"

function IALogado(){
    return(
        <>

        <Topo/>

        <NavbarPadraoLogado usuLogado={true}/>


        <section className='primeiraSeccaoIA'>
            <div className="imgPrimeiraSeccaoIA">
                <div className="txtPrimeiraSeccaoIA">
                    <h1 className='Titulo01IA'>Lensify IA</h1>
                </div>
                <div className='txtPrimeiraSeccaoIA01'>
                    <p className='textoMenorIA1'>Lensify IA é uma Inteligencia Artificial que através de fotos enviadas pelo usuário, identifica o arquétipo do rosto e recomenda as melhores armações de óculos.</p>
                    <a href="#ia"  className='linkIaTelaIa' >Teste já</a>
                </div>
            </div>
        </section>

        <section className='segundaSeccaoIA'>
                <div className="imgSegundaSeccaoIA">
                    <div className='txtSegundaSeccaoIA'>
                        <h1 className='Titulo02IA'>Filtro AR</h1>
                        <div className="txtSegundaSeccaoIA02">
                            <p className="textoMenorIA2">
                            Já o nosso filtro de Realidade Aumentada usa a câmera do dispositivo para aplicar, em tempo real, diversos modelos de óculos no rosto do usuário.
                            </p>
                            <a href="#filtro" className="linkFiltroTelaIA">Teste já</a>
                        </div>
                    </div>
                </div>
        </section>

        <div className='AlinhaTextoNossaEquipe'>
            <h1 className='tituloNossaEquipe tituloIA02'>TESTE A NOSSA IA OU FILTRO</h1>
        </div>

        <section className='ContainerIAeFiltro'>
            <div className="OculosEscolhaIa">
                <img src={ImgOculos} alt="" className='FotoOculosIA'/>
                {<Link to={"/filtro"} className='btnFiltroTelaIa' id='ia'>FILTRO</Link>}
                {<Link to={"/TesteIaLogado"} className='btnIaTelaIa' id='filtro'>LENSFY IA</Link>}
            </div>
        </section>

        <div className='footerALinhadoIaTelaGrande'>
            <FooterPadraoLogado/>
        </div>
        </>
    )
}

export default IALogado