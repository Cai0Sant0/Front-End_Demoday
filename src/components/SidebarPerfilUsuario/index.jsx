import estilo from "./style.module.css";
import { Link } from "react-router-dom";
import iconeCrianca from "../../assets/images/imagemPerfilUsuario/icone01sidebar.svg"
import iconeConfig from "../../assets/images/imagemPerfilUsuario/icone02sidebar.svg"
import iconeBack from "../../assets/images/imagemPerfilUsuario/icone03sidebar.svg"

function SidebarPerfilUsuario() {
  return (
    <>
      <div className={estilo.sidebar}>
        {
          <Link to={"/fotoUsuario"}>
            <abbr title="Escolha foto de perfil">
              <div className={estilo.btnSidebar}>
                <img src={iconeCrianca} alt="" />
              </div>
            </abbr>
          </Link>
        }
        {
          <Link to={"/configuracaoUsuario"}>
            <abbr title="Configurações usuário">
              <div className={estilo.btnSidebar}>
                <img src={iconeConfig} alt="" />
              </div>
            </abbr>
          </Link>
        }
        {
          <Link to={"/"}>
            <abbr title="Voltar para home">
              <div className={estilo.btnSidebar}>
                <img src={iconeBack} alt="" />
              </div>
            </abbr>
          </Link>
        }
      </div>
    </>
  );
}

export default SidebarPerfilUsuario;