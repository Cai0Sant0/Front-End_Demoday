import estilo from "./style.module.css";
import SidebarPerfilUsuario from "../../components/SidebarPerfilUsuario";
import iconePerfil01 from "../../assets/images/imagemPerfilUsuario/icone01Perfil.png";
import iconePerfil02 from "../../assets/images/imagemPerfilUsuario/icone02Perfil.png";
import iconePerfil03 from "../../assets/images/imagemPerfilUsuario/icone03Perfil.png";
import iconePerfil04 from "../../assets/images/imagemPerfilUsuario/icone04Perfil.png";
import iconePerfil05 from "../../assets/images/imagemPerfilUsuario/icone05Perfil.png";
import iconePerfil06 from "../../assets/images/imagemPerfilUsuario/icone06Perfil.png";
import iconePerfil07 from "../../assets/images/imagemPerfilUsuario/icone07Perfil.png";
import iconePerfil08 from "../../assets/images/imagemPerfilUsuario/icone08Perfil.png";
import iconePerfil09 from "../../assets/images/imagemPerfilUsuario/icone09Perfil.png";
import iconePerfil10 from "../../assets/images/imagemPerfilUsuario/icone10Perfil.png";
import iconePerfil11 from "../../assets/images/imagemPerfilUsuario/icone11perfil.png";
import iconeCamera from "../../assets/images/imagemPerfilUsuario/iconeCamera.svg"

function TelaUsuarioFotoPerfil() {
  return (
    <main className={estilo.conteudoPrincipal}>
      <section className={estilo.seccaoSideBar}>
        <SidebarPerfilUsuario />
      </section>
      <section className={estilo.seccaoConteudo}>
        <div className={estilo.fotoNomeUsu}>
          <div className={estilo.fotoAtualUsu}>
            {/* foto do usuário fica dentro dessa div no estilo */}
          </div>
          <h2 className={estilo.nomeUsuario}>NOME DO USUÁRIO</h2>
        </div>
        <div className={estilo.conatinerFotosPerfil}>
          <h2 className={estilo.tituloFotosPerfil}>Escolha a foto!</h2>
          <div className={estilo.linhaFotoPerfil}>
            <div className={estilo.fotosPerfil}>
              <img src={iconePerfil01} width={140} alt="icone de avatar" />
            </div>
            <div className={estilo.fotosPerfil}>
              <img src={iconePerfil02} width={140} alt="icone de avatar" />
            </div>
            <div className={estilo.fotosPerfil}>
              <img src={iconePerfil03} width={140} alt="icone de avatar" />
            </div>
            <div className={estilo.fotosPerfil}>
              <img src={iconePerfil04} width={140} alt="icone de avatar" />
            </div>
          </div>
          <div className={estilo.linhaFotoPerfil}>
            <div className={estilo.fotosPerfil}>
              <img src={iconePerfil05} width={140} alt="icone de avatar" />
            </div>
            <div className={estilo.fotosPerfil}>
              <img src={iconePerfil06} width={140} alt="icone de avatar" />
            </div>
            <div className={estilo.fotosPerfil}>
              <img src={iconePerfil07} width={140} alt="icone de avatar" />
            </div>
            <div className={estilo.fotosPerfil}>
              <img src={iconePerfil08} width={140} alt="icone de avatar" />
            </div>
          </div>
          <div className={estilo.linhaFotoPerfil}>
            <div className={estilo.fotosPerfil}>
              <img src={iconePerfil09} width={140} alt="icone de avatar" />
            </div>
            <div className={estilo.fotosPerfil}>
              <img src={iconePerfil10} width={140} alt="icone de avatar" />
            </div>
            <div className={estilo.fotosPerfil}>
              <img src={iconePerfil11} width={140} alt="icone de avatar" />
            </div>
            <div className={estilo.fotosPerfil}>
              <img src={iconeCamera} width={130} alt="icone de avatar" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default TelaUsuarioFotoPerfil;
