import estilo from "./style.module.css";
import Topo from "../../components/ComponenteEscrolaPraCima";
import NavbarPadraoLogado from "../../components/navbarLogado";
import FooterPadraoLogado from "../../components/footerLogado";
import imgFilhaePai from "../../assets/images/imagensSobreNos/videoSobreNos.svg";
import imgMenino from "../../assets/images/imagensSobreNos/imgMenino.png";
import imgBolinhas from "../../assets/images/imagensSobreNos/elementosSobreNos.svg";
import imgNossaEquipe from "../../assets/images/imagensSobreNos/imgNossoTeam.svg";
import logoProa from "../../assets/images/imagensSobreNos/imgProa.svg"

function Sobre02Logado() {
  return (
    <>
       <NavbarPadraoLogado usuLogado = {true} />

      <Topo />

      <div className={estilo.controlDeImgSobre}>
        <div className={estilo.chamadaControlSobre}>
          <h2 className={estilo.chamadaPaisSobre}>
            Cuidando da visão dos seus filhos para que eles possam enxergar um
            futuro brilhante.
          </h2>
        </div>
        <img
          src={imgFilhaePai}
          alt="Imagem de pai e filha lendo livro "
          className={estilo.fotoCapaSobre}
        />
      </div>

      <hr className={estilo.divisaoSombra} />

      <section className={estilo.seccaoMissao}>
        <h2 className={estilo.tituloMissao}>QUAL É A NOSSA MISSÃO?</h2>
        <hr className={estilo.linhaVertical} />
        <p className={estilo.paragraphNossaMissao}>
          Auxiliar médicos e responsáveis de crianças sobre o pré-diagnósticos
          de doenças visuais, trazendo abordagem simples e interativa, através
          da gamificação.
        </p>
      </section>

      <section className={estilo.seccaoVisao}>
        <div className={estilo.containerImgMenino}>
          <img
            src={imgMenino}
            alt="imagem de menino negro com óculos azul em torno de bolas coloridas"
          />
        </div>
        <div className={estilo.containerTextos}>
          <h2 className={estilo.tituloVisao}>E QUANTO A NOSSA VISÃO?</h2>
          <p className={estilo.txtVisao}>
            Nossa visão para o futuro é estar em escolas e comunidades, levando
            saúde visual e bem-estar a todos!
          </p>
          <h2 className={estilo.valores}>
            NOSSOS VALORES SÃO A EDUCAÇÃO, INOVAÇÃO, ACESSIBILIDADE, EMPATIA E
            COLABORAÇÃO
          </h2>
        </div>
      </section>

      <hr className={estilo.divisaoSeccao} />

      <section className={estilo.seccaoNossaOrigem}>
        <h1 className={estilo.tituloOrigem}>E QUAL A NOSSA ORIGEM ?</h1>
        <section className={estilo.seccaoImgeTxt}>
          <div className={estilo.seccaoTxt}>
            <p className={estilo.txtOrigem}>
              Nascemos no Instituto Proa, uma instituição que capacita jovens
              através do projeto Proprofissão. Este projeto foi desenvolvido por
              um grupo de estudantes durante o desafio Demoday, unindo
              criatividade para promover o cuidado com a saúde ocular infantil.
            </p>
            <img
              src={imgBolinhas}
              alt="bolas diversas com figuras que simbolizam tranquilidade"
              className={estilo.bolinhasIcones}
            />
          </div>
          <div className={estilo.seccaoImg}>
            <img
              src={imgNossaEquipe}
              alt="foto da equipe Te Vejo"
              className={estilo.imgNossaEquipe}
            />
          </div>
        </section>
      </section>

      <hr className={estilo.divisaoSeccao} />

      <section className={estilo.seccaoProa}>
        <h1 className={estilo.tituloOrigem}>O QUE É O INSTUTO PROA?</h1>
        <div className={estilo.explicaoProa}>
            <img src={logoProa} alt="logo do instituto Proa" className={estilo.imgProa} />
            <hr className={estilo.linhaVerticalProa} />
            <p className={estilo.txtExplicacao}>O Instituto PROA nasceu em 2007 com o objetivo de capacitar e inserir jovens de baixa renda, vindos de escolas públicas, no mercado de trabalho. Por meio de desenvolvimento pessoal e profissional, o PROA já impactou mais de 70 mil jovens e hoje atua em 12 Estados: SP, RJ, MG, SC, RS, PR, PE, BA, GO, DF, MS e PA com dois projetos: o PROPROFISSÃO e a Plataforma PROA.</p>
        </div>
      </section>

      <FooterPadraoLogado />
    </>
  );
}

export default Sobre02Logado;
