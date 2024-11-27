import "./style.css";
import NavbarPadrao from "../../components/navbar";
import FooterPadrao from "../../components/footer";
import CardJogo from "../../components/cardJogos/CardJogo";
import CardPlano from "../../components/cardPlanos/CardPlano";
import { Link } from "react-router-dom";

import imgPrimeiroJogo from "../../assets/images/imagensHome/ImgJogo01.png";
import imgSegundoJogo from "../../assets/images/imagensHome/ImgJogo02.png";
import imgTerceiroJogo from "../../assets/images/imagensHome/ImgJogo03.jpg";

import logoKenzo from "../../assets/images/logoParceiros/logoKenzo.png";
import logoNavgard from "../../assets/images/logoParceiros/logoNavgard.png";
import logoJovem from "../../assets/images/logoParceiros/logoJovem.png";
import logoSymbee from "../../assets/images/logoParceiros/logoSymbee.png";

import CarroselHome from "../../components/carroselHome/CarroselHome";
import Libras from "../../components/VLibras";

function Home() {
  return (
    <>
      <NavbarPadrao />

      <CarroselHome />

      <Libras />
      <section className="segundaSeccaoHome">
        <div className="imgsegundaSeccaoHome">
          <div className="txtSegundaSeccaoHome">
            <h1 className="Titulo02Home">Lensify</h1>
            <p className="textoMenor02Home">
              Com a nossa Inteligência Artificial, escolher a armação perfeita
              para você ficou mais prático e interativo!
            </p>
          </div>
          <div className="txtSegundaSeccaoHome02">
            <p className="textoMenorHome3">
              Nossa tecnologia exclusiva <strong>analisa</strong> o formato do
              rosto da criança e <strong>recomenda </strong> os
              <strong> óculos</strong> mais adequados, unindo estilo e conforto.
            </p>
            {
              <Link className="linkIaHomeEmDestaque" to={"/ia"}>
                Testar Agora
              </Link>
            }
          </div>
        </div>
      </section>

      <h2 className="SubtituloParaOsJogos">
        Jogos que ajudam a ir além da diversão
      </h2>

      <p className="txthomeJogo">Passe o mouse por cima para saber mais!</p>

      <section className="seccaoJogosHome">
        <div className="PrimeiroJogoSeccaoHome">
          {
            <CardJogo
              img={imgPrimeiroJogo}
              desc={
                "Pequeno explorador você está prestes a entrar em um mundo cheio de Letras Secretas."
              }
              corFundo={"#360568"}
            />
          }
          <p className="descricaoPrimeiroJogoHome">Desafio das Letras</p>
        </div>
        <div className="SegundoJogoSeccaoHome">
          {
            <CardJogo
              img={imgSegundoJogo}
              desc={
                "Prepare-se para uma aventura em Fotografia Florestal. Pegue sua câmera, porque cada clique é uma nova descoberta!"
              }
              corFundo={"#FF592B"}
            />
          }
          <p className="descricaoSegundoJogoHome">Fotografia Florestal</p>
        </div>
        <div className="TerceiroJogoSeccaoHome">
          {
            <CardJogo
              img={imgTerceiroJogo}
              desc={
                "Os reis precisam de sua ajuda para encontrar um impostor entre os soldados! Boa sorte na missão."
              }
              corFundo={"#662200"}
            />
          }
          <p className="descricaoTerceiroJogoHome">Fora do meu Reino</p>
        </div>
      </section>
      <section className="ContainerlinkParaJogo">
        {
          <Link className="linkParaOsJogosHome" to={"/jogos"}>
            PARA CONHECER MAIS JOGOS CLIQUE AQUI!
          </Link>
        }
      </section>

      <h2 className="SubtituloParaOsPlanos">Acesse nossos planos!</h2>

      <section className="QuartaSeccaoHome">
        <CardPlano
          ValorPlano={"R$ 00,00/Mês"}
          TipoPlano={"Free"}
          bene01={"Acesso aos blogs"}
          bene02={"Lensify: Teste grátis"}
          bene03={"2 jogos grátis"}
          bene04={"Realidade aumentada"}
          caminhoBtn={"/cadastro"}
          txtBtn={"Cadastrar-se"}
          CorfundoCartao={"#2387A6"}
          CorfundoCartao02={"#a6e6fa"}
        />

        <CardPlano
          ValorPlano={"R$ 29,00/Mês"}
          TipoPlano={"Plus"}
          bene01={"Sem anúncios"}
          bene02={"Lensify: Ilimitado"}
          bene03={"Jogos liberados"}
          bene04={"Ícones exclusivos"}
          caminhoBtn={"/pagamento"}
          txtBtn={"Assinar agora"}
          CorfundoCartao={"#FFB800"}
          CorfundoCartao02={"#ffb80059"}
        />
      </section>

      <h2 className="SubtituloParaOsPlanos">Conheça nossos parceiros!</h2>

      <section className="sliderParceiros">
        <div className="list">
          <a href="/parceiros">
            <div className="itemParceiro slide01Parceiro">
              <img src={logoKenzo} alt="logo óticas Kenzo" />
            </div>
          </a>

          <a href="/parceiros">
            <div className="itemParceiro slide02Parceiro">
              <img src={logoJovem} alt="logo óticas Jovem" />
            </div>
          </a>

          <a href="/parceiros">
            <div className="itemParceiro slide03Parceiro">
              <img
                src={logoNavgard}
                alt="logo trabalho Navgard demoday de Recife"
              />
            </div>
          </a>

          <a href="/parceiros">
            <div className="itemParceiro slide04Parceiro">
              <img
                src={logoSymbee}
                alt="logo trabalho Symbee demoday de Equipe 04"
              />
            </div>
          </a>
        </div>
      </section>

      <FooterPadrao />
    </>
  );
}

export default Home;
