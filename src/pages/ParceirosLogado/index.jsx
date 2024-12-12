import "./style.css";
import logoInstagram from "../../assets/images/iconesRedesSociais/instagram.svg";
import logoFacebook from "../../assets/images/iconesRedesSociais/facebook.svg";
import logoGithub from "../../assets/images/iconesRedesSociais/github.svg";
import logoLinkedin from "../../assets/images/iconesRedesSociais/linkedin.svg";
import FooterPadraoLogado from "../../components/footerLogado";
import Topo from "../../components/ComponenteEscrolaPraCima";

function ParceirosLogado() {
  return (
    <>

      <Topo/>

      <h1 className="tituloParceiros">Nossos Parceiros</h1>

      <section className="seccaoParceiro01">
        <a href="https://naveguard.vercel.app/" target="_blank">
          <div className="logoParceiro01"></div>
        </a>

        <div className="conteudoParceiro01">
          <p className="paragrafoParceiro">
          Naveguard é um projeto social desenvolvido por jovens estudantes do Instituto Proa, formados pelo desafio DemoDay de Recife - PE. Consistem em ensinar e auxiliar crianças perante a segurança na internet de maneira lúdica e interativa.
          </p>
        </div>

        <div className="redesSociasParceiroDireita">
          <a href="https://www.instagram.com/naveguard/" target="_blank">
            <img
              src={logoInstagram}
              alt="logo Instagram"
              width="30"
              height="30"
            />
          </a>
          <a href="https://naveguard.vercel.app/"  target="_blank">
            <img
              src={logoGithub}
              alt="logo Github"
              width="30"
              height="30"
            />
          </a>
          <a href="https://www.linkedin.com/company/naveguard/"  target="_blank">
            <img
              src={logoLinkedin}
              alt="logo Linkedin"
              width="30"
              height="30"
            />
          </a>
        </div>
      </section>

      <section className="seccaoParceiro02">
        <div className="logoParceiro02"></div>

        <div className="conteudoParceiro02">
        Óticas Kenzo hoje é uma das marcas mais desejadas. Contribuiram com o projeto “Te Vejo” disponibilizando seu catálogo de armações para uso exclusivo em nossa Lensify, gerando resultados inéditos que agradam cada vez mais nossos usuários.

        <div className="redesSociasParceiro">
          <a href="https://www.instagram.com/oticaskenzoferraz?igsh=azJlejdkNjFkNzQx"  target="_blank">
            <img
              src={logoInstagram}
              alt="logo Instagram"
              width="30"
              height="30"
            />
          </a>
          <a href="https://www.facebook.com/oticaskenzo/"  target="_blank">
            <img
              src={logoFacebook}
              alt="logo Facebook"
              width="30"
              height="30"
            />
          </a>
        </div>
        </div>

       
      </section>


      <section className="seccaoParceiro03">
        <div className="logoParceiro03"></div>

        <div className="conteudoParceiro03">
        <p className="paragrafoParceiro">Ótica Jovem em parceria com a Te Vejo, age de maneira abrangente. Também disponibilizando diversos modelos de óculos para uso concreto em nossa Lensify, transformando assim, um catálogo mais abrangente e inovador aos nossos usuários.</p>
        </div>

        <div className="redesSociasParceiroDireita">
          <a href="https://www.instagram.com/oticajovemferraz?igsh=MWVrdnlnNXhhM285bQ=="  target="_blank">
            <img
              src={logoInstagram}
              alt="logo Instagram"
              width="30"
              height="30"
            />
          </a>
          <a href="https://www.facebook.com/oticajovemsp/"  target="_blank">
            <img
              src={logoFacebook}
              alt="logo Facebook"
              width="30"
              height="30"
            />
          </a>
        </div>
      </section>

      <section className="seccaoParceiro04">
        <div className="logoParceiro04"></div>

        <div className="conteudoParceiro04">
        A Symbee é uma plataforma freelancer que conecta desenvolvedores, empresas e usuários, destacando-se pela gamificação e rankings mensais. Focada em projetos pequenos, atende desenvolvedores de todos os níveis e busca revolucionar o mercado freelancer nacional, promovendo uma interação saudável entre os usuários.

        <div className="redesSociasParceiro">
          <a href="https://www.instagram.com/symbee_ofc?igsh=MW91dWt5bG5reDBkNw==" target="_blank">
            <img
              src={logoInstagram}
              alt="logo Instagram"
              width="30"
              height="30"
            />
          </a>
          <a href="https://github.com/Symbee" target="_blank">
            <img
              src={logoGithub}
              alt="logo Github"
              width="30"
              height="30"
            />
          </a>
          <a href="https://www.linkedin.com/company/symbeehive/" target="_blank">
            <img
              src={logoLinkedin}
              alt="logo Linkedin"
              width="30"
              height="30"
            />
          </a>
        </div>
        </div>
      </section>


      <FooterPadraoLogado/>

      
    </>
  );
}

export default ParceirosLogado;
