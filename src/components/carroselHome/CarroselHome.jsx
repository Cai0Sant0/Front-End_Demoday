import Carousel from 'react-bootstrap/Carousel';
import imgSlide01 from '../../assets/images/imagensHome/meninaLendoLivro.png'
import imgSlide02 from '../../assets/images/imagensHome/SegundoSlide.png'
import imgSlide03 from '../../assets/images/imagensHome/TerceiroSlide.png'
import imgSlide04 from '../../assets/images/imagensHome/QuartoSlide.png'
import './style.css'
import { Link } from 'react-router-dom';


function CarroselHome(props) {
  return (
        <div className='central central-large'>
          <Carousel interval={400000}>
            <Carousel.Item>
              <img src={imgSlide01} alt="imagem de criança lendo com os dizeres Olhos saudáveis, infância feliz cuide do olhar de quem vc
              ama" />
              <Carousel.Caption className='txtPrimeiroSlide'>
              <h3>Venha Conhecer a TeVejo</h3>
              <p>Aqui cuidamos da sáude visual do seu pequeno!</p>
              {<Link to={props.link01} className='btnCarrosel01'>{props.txtBtn01}</Link>}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={imgSlide02} alt="Foto de garoto lendo" />
              <Carousel.Caption className='txtSegundoSlide'>
                <h3>Venha Conhecer a TeVejo</h3>
                <p>Aqui seu pequeno tem uma visão brilhante!</p>
                {<Link to={props.link02} className='btnCarrosel02'>{props.txtBtn02}</Link>}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img src={imgSlide03} alt="Bebê com óculos sorrindo junto com seu avô" />
              <Carousel.Caption className='txtTerceiroSlide'>
                <h3>Venha Conhecer a TeVejo</h3>
                <p>Veja nosso blog e aprenda mais sobre a saúde visual!</p>
                {<Link to={"/blog"} className='btnCarrosel03'>Veja Já!</Link>}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={imgSlide04} alt="imagem de criança lendo com os dizeres Olhos saudáveis, infância feliz cuide do olhar de quem vc
              ama" />
              <Carousel.Caption className='txtQuartoSlide'>
              <h3>Venha Conhecer a TeVejo</h3>
              <p>Conheça nossos jogos intuitivos para seu pequeno!</p>
              {<Link to={"/jogos"} className='btnCarrosel04'>Jogue Agora!</Link>}
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
  );
}

export default CarroselHome;