import estilo from './style.module.css'
import SidebarPerfilUsuario from '../../components/SidebarPerfilUsuario';

function ConfigUsuario() {
    return (
        <main className={estilo.conteudoPrincipal}>
            <section className={estilo.seccaoSideBar}>
                <SidebarPerfilUsuario />
            </section>
            <section className={estilo.seccaoConteudo}>
                <div className={estilo.containerInfoUsu}>

                </div>
            </section>
        </main>
    )
}

export default ConfigUsuario;