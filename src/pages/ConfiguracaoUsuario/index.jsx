import estilo from "./style.module.css";
import SidebarPerfilUsuario from "../../components/SidebarPerfilUsuario";
import ModalEditPessoas from "../../components/ModalEditarPessoasUsu";
import ModalEditInformacoes from "../../components/ModalEditarInfoUsu";

function ConfigUsuario() {
  return (
    <main className={estilo.conteudoPrincipal}>
      <section className={estilo.seccaoSideBar}>
        <SidebarPerfilUsuario />
      </section>
      <section className={estilo.seccaoConteudo}>
        <div className={estilo.containerInfoUsu}>

          <h2>Pessoas Registradas</h2>

          <label htmlFor="nomeResponsavel">Nome do Responsável</label>
          <input
            type="text"
            name="nomRespo"
            id="nomeResponsavel"
            placeholder="Nome do responsável"
          />
          <label htmlFor="nomePrimeiraCrianca">Nome da criança</label>
          <input
            type="text"
            name="crianca01"
            id="nomePrimeiraCrianca"
            placeholder="Nome da 1° criança"
          />
          <label htmlFor="nomeSegundaCrianca">Nome da criança</label>
          <input
            type="text"
            name="crianca02"
            id="nomeSegundaCrianca"
            placeholder="Nome da 2° criança"
          />
          <label htmlFor="nomeTerceiraCrianca">Nome do criança</label>
          <input
            type="text"
            name="crianca03"
            id="nomeTerceiraCrianca"
            placeholder="Nome da 3° criança"
          />

          {<ModalEditPessoas />}
        </div>
        <div className={estilo.containerInfoUsu}>

          <h2>Informações do Responsável</h2>

          <label htmlFor="emailUsuario">Email Cadastrado</label>
          <input type="email" name="emailUSu" id="emailUsuario" placeholder="Email Atual" />

          <label htmlFor="cpfUsuario">CPF Cadastrado</label>
          <input type="number" name="cpfUsu" id="cpfUsuario" placeholder="CPF Atual" />

          <label htmlFor="senhaAtualUsuario">Senha Atual</label>
          <input type="password" name="senhaAtuUsu" id="senhaAtualUsuario" placeholder="Senha Atual" />

          {<ModalEditInformacoes />}
        </div>
      </section>
    </main>
  );
}

export default ConfigUsuario;
