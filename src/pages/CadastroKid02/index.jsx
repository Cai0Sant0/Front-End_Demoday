import { Link } from "react-router-dom";
import estilo from "./style.module.css";

function Cadastro02Kid() {
  return (
    <>
      <main className={estilo.corpoPrincipal}>
        <section className={estilo.seccaoFormulario}>
          <h1 className={estilo.tituloCadastroKid}>Cadastre seu pequeno!</h1>
          <p className={estilo.txtExplicacao}>
            <strong>O cadastro é opcional</strong> e, se preferir, você pode
            ignorar o formulário e acessar a plataforma normalmente.
          </p>

          <div className={estilo.formulario}>
            <label htmlFor="nomecrianca01">Nome criança 01:</label>
            <input
              type="text"
              name="crianca01Nome"
              id="nomecrianca01"
              autoComplete="off"
              placeholder="Nome do pequeno"
            />

            <label htmlFor="nomecrianca02">Nome criança 02 (opcional):</label>
            <input
              type="text"
              name="crianca02Nome"
              id="nomecrianca02"
              autoComplete="off"
              placeholder="Nome do pequeno"
            />

            <label htmlFor="nomecrianca03">Nome criança 03 (opcional):</label>
            <input
              type="text"
              name="crianca03Nome"
              id="nomecrianca03"
              autoComplete="off"
              placeholder="Nome do pequeno"
            />

            <div className={estilo.BtnsCadadastroKids}>
                <button className={estilo.btnCadastrarKids} onClick={()=>{
                    alert("Cadastro realizado com sucesso!");

                    window.location.href = "/logado"
                }}>Cadastrar</button>
                {<Link to={"/logado"} className={estilo.LinkHome}>Ir para home</Link>}
            </div>
          </div>
        </section>
        <section className={estilo.seccaoImg}></section>
      </main>
    </>
  );
}

export default Cadastro02Kid;
