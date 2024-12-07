import estilo from "./style.module.css";
import logoTevejo from "../../assets/images/logo/logo.svg";
import { Link } from "react-router-dom";




function Cadastro02() {
  return (
    <>
      <main className={estilo.corpoPrincipal}>
        <section className={estilo.seccaoForm}>
          <h1 className={estilo.tituloCadastro}>Cadastre-se!</h1>
          <div className={estilo.forms}>
            <label htmlFor="nomeUsu">Nome:</label>
            <input
              type="text"
              name="usuNome"
              id="nomeUsu"
              required
              autoComplete="off"
              placeholder="Seu Nome"
            />

            <label htmlFor="emailUsu">Email:</label>
            <input
              type="email"
              name="usuEmail"
              id="emailUsu"
              required
              autoComplete="off"
              placeholder="Seu Email"
            />

            <label htmlFor="cpfUsu">CPF:</label>
            <input
              type="text"
              name="cpf"
              pattern="(\d{3}\.?\d{3}\.?\d{3}-?\d{2})|(\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2})"
              required
              autoComplete="off"
              placeholder="xxx.xxx.xxx-xx"
              id="cpfUsu"
            />

            <label htmlFor="senhaUsu">Criar senha:</label>
            <input
              type="password"
              name="usuSenha"
              id="senhaUsu"
              required
              autoComplete="off"
              placeholder="Sua Senha"
            />

            <p>
              Já possui Cadastro?{" "}
              {
                <Link to={"/login"} className={estilo.linkLogin}>
                  Logue agora!
                </Link>
              }
            </p>

            <Link className={estilo.linkCadastroKid} to={"/cadastroKid"} onClick={()=>{
              let nome = document.getElementById('nomeUsu');
              let email = document.getElementById('emailUsu');
              let cpf = document.getElementById('cpfUsu');
              let senha = document.getElementById('senhaUsu');


              nome.value = "";
              email.value = "";
              cpf.value = "";
              senha.value = "";
            }}>
              Cadastrar
            </Link>
          </div>
        </section>
        <section className={estilo.seccaoImg}>
          <img
            src={logoTevejo}
            alt="logo da Te Vejo onde está um olho e as inscrições te vejo ao lado"
            className={estilo.imgLogo}
          />
        </section>
      </main>
    </>
  );
}

export default Cadastro02;
