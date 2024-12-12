import estilo from "./style.module.css";
import imgPaiFilhoBlog from "../../assets/images/imagemBlog/imgPaiFilhoBlog.svg";
import LerMais from "../../components/btnLerMais/btnLerMais";
import LerMais2 from "../../components/btnLerMais/btnLerMais2";
import LerMais3 from "../../components/btnLerMais/btnLerMais3";
import LerMais4 from "../../components/btnLerMais/btnLerMais4";
import LerMais5 from "../../components/btnLerMais/btnLerMais5";
import LerMais6 from "../../components/btnLerMais/btnLerMais6";
import Topo from "../../components/ComponenteEscrolaPraCima";
import NavbarPadraoLogado from "../../components/navbarLogado";
import FooterPadraoLogado from "../../components/footerLogado";

function Blog02Logado() {
  return (
    <>

      <Topo/>
      <NavbarPadraoLogado usuLogado={true}/>

      <div className={estilo.controlDeImg}>
        <div className={estilo.chamadaControl}>
          <h2 className={estilo.chamadaPais}>
            Dicas e cuidados para <br /> a visão do seu filho.
          </h2>
        </div>
        <img
          src={imgPaiFilhoBlog}
          alt="Imagem de pai e filho "
          className={estilo.fotoCapaBlog}
        />
      </div>

      <hr className={estilo.divisaoSombra} />

      <section className={estilo.seccaoBlog}>
        <div className={estilo.fotoBlog01}></div>
        <div
          className={estilo.conteudoBlog}
          style={{ backgroundColor: "#2B616D" }}
        >
          <h2 className={estilo.subTituloPrimeiroBlog}>
            Quando consultar um oftalmologista?
          </h2>
          <p>
            Os pais devem estar atentos a certos comportamentos...
          </p>
          <LerMais />
        </div>
      </section>

      <section className={estilo.seccaoBlogInvertido}>
        <div className={estilo.fotoBlog02}></div>
        <div
          className={estilo.conteudoBlog}
          style={{ backgroundColor: "#F445A1" }}
        >
          <h2>A Importância da luz natural para a visão das crianças</h2>
          <p>
            A exposição à luz natural é fundamental para o desenvolvimento
            saudável da visão...
          </p>
          <LerMais2 />
        </div>
      </section>

      <section className={estilo.seccaoBlog}>
        <div className={estilo.fotoBlog03}></div>
        <div
          className={estilo.conteudoBlog}
          style={{ backgroundColor: "#e6b056" }}
        >
          <h2>Como criar um ambiente favorável à saúde ocular em casa?</h2>
          <p>
            Manter a iluminação adequada em casa é crucial...
          </p>
          <LerMais3 />
        </div>
      </section>

      <section className={estilo.seccaoBlogInvertido}>
        <div className={estilo.fotoBlog04}></div>
        <div
          className={estilo.conteudoBlog}
          style={{ backgroundColor: "#360568" }}
        >
          <h2>Jogos e atividades para estimular a saúde ocular</h2>
          <p>
            A exposição à luz natural é fundamental para o desenvolvimento
            saudável da visão...
          </p>
          <LerMais4 />
        </div>
      </section>

      <section className={estilo.seccaoBlog}>
        <div className={estilo.fotoBlog05}></div>
        <div
          className={estilo.conteudoBlog}
          style={{ backgroundColor: "#59D1F6" }}
        >
          <h2 className="subTituloQuintoBlog">Como escolher a armação de óculos ideal para seu filho</h2>
          <p>A escolha da armação dos óculos pode ser uma tarefa divertida...</p>
          <LerMais5 />
        </div>
      </section>

      <section className={estilo.seccaoBlogInvertido}>
        <div className={estilo.fotoBlog06}></div>
        <div
          className={estilo.conteudoBlog}
          style={{ backgroundColor: "#CA7DF9" }}
        >
          <h2>Mitos e Verdades sobre a Saúde Ocular Infantil</h2>
          <p>
            Existem muitos mitos sobre a saúde ocular que podem gerar confusão...
          </p>
          <LerMais6 />
        </div>
      </section>

      <FooterPadraoLogado />
    </>
  );
}

export default Blog02Logado;
