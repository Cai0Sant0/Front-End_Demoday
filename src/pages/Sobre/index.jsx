import "./style.css";
import NavbarPadrao from "../../components/navbar";
import FooterPadrao from "../../components/footer";
import videoSobreNos from "../../assets/images/imagensSobreNos/videoSobreNos.svg";
import fotoMenino from "../../assets/images/imagensSobreNos/fotoMenino.svg";
import imgNossoTeam from "../../assets/images/imagensSobreNos/imgNossoTeam.svg";
import elementosSobreNos from "../../assets/images/imagensSobreNos/elementosSobreNos.svg";
import imgProa from "../../assets/images/imagensSobreNos/imgProa.svg";
import Topo from "../../components/ComponenteEscrolaPraCima";
function Sobre() {
  return (
    <>
      <Topo />
      <NavbarPadrao />


      <div className="controlDeVideo">
        <div className="chamadaControl">
          <h3 className="chamadaPais">
            Cuidando da visão dos seus filhos para que eles possam enxergar um
            futuro brilhante.
          </h3>
        </div>
        <img src={videoSobreNos} alt="" className="fotoCapaBlog" />
      </div>

      <hr />

      <div className="controlTextoMissao">
        <h2 className="tituloMissao">QUAL É A NOSSA MISSÃO?</h2>
        <div className="linhaVertical"></div>
        <p className="paragraphNossaMissao">
          Auxiliar médicos e responsáveis de crianças sobre o pré-diagnósticos
          de doenças visuais, trazendo abordagem simples e interativa, através
          da gamificação.
        </p>
      </div>

      <div className="controlTextosImagensVisao">
        <div className="controlGeralCirculos">
          <div id="circulos" className="circulo-externo">
            <div id="circulos" className="circulo-medio">
              <div id="circulos" className="circulo-interno">
                <img
                  className="meninoCirculoAmarelo"
                  src={fotoMenino}
                  alt="foto de menino sorrindo"
                />
              </div>
            </div>
            <div id="circulos" className="circulo-azul-externo">
              <div id="circulos" className="circulo-azul-medio">
                <div id="circulos" className="circulo-azul-interno"></div>
              </div>
            </div>

            <div id="circulos" className="circulo-roxo-externo">
              <div id="circulos" className="circulo-roxo-medio">
                <div id="circulos" className="circulo-roxo-interno"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="controleChamadoTexto">
          <h2 className="tituloVisao">E QUANTO A NOSSA VISÃO?</h2>
          <div className="backgroundVisao">
            <p className="TxtVisaoTelaSobre">
              Nossa visão para o futuro é estar em escolas e comunidades,
              levando saúde visual e bem-estar a todos!
            </p>
          </div>
          <div className="controleTextoValores">
            <h2 className="textoSobreValores">
              NOSSOS VALORES SÃO A EDUCAÇÃO, INOVAÇÃO, ACESSIBILIDADE, EMPATIA E
              COLABORAÇÃO
            </h2>
          </div>
        </div>
      </div>

      <div className="linhaHorizontalRosa"></div>

      <h2 className="nossaOrigem">E QUAL É A NOSSA ORIGEM?</h2>
      <div className="elementosNossaOrigem">
        <div className="postItHistoria">
          <p>
            Nascemos no Instituto Proa, uma instituição que capacita jovens
            através do projeto Proprofissão. Este projeto foi desenvolvido por
            um grupo de estudantes durante o desafio Demoday, unindo
            criatividade para promover o cuidado com a saúde ocular infantil.
          </p>
          <img className="iconesNossaOrigem" src={elementosSobreNos} alt="" />
        </div>

        <img className="imgTropa" src={imgNossoTeam} alt="" />
      </div>

      <div className="linhaHorizontalRosa"></div>

      <h2 className="nossaOrigem">O QUE É O INSTITUTO PROA?</h2>

      <div className="controlProa">
        <img src={imgProa} alt="" className="imgProa" />
        <div className="linhaVerticalProa"></div>
        <p className="paragraphProa">
          O Instituto PROA nasceu em 2007 com o objetivo de capacitar e inserir
          jovens de baixa renda, vindos de escolas públicas, no mercado de
          trabalho. Por meio de desenvolvimento pessoal e profissional, o PROA
          já impactou mais de 70 mil jovens e hoje atua em 12 Estados: SP, RJ,
          MG, SC, RS, PR, PE, BA, GO, DF, MS e PA com dois projetos: o
          PROPROFISSÃO e a Plataforma PROA.
        </p>
      </div>

      <FooterPadrao />
    </>
  );
}

export default Sobre;
