import FooterPadrao from '../../components/footer'
import FormularioPagamento from '../../components/FormsPagamento'
import estilo from './style.module.css' 
import Libras from "../../components/VLibras"
import Topo from "../../components/ComponenteEscrolaPraCima"


function Pagamento(){
    return (
        <>
       
       <Topo/>

       <Libras/>

        <section className={estilo.seccaoForms}>

            <h1 className={estilo.titulo}>Assine agora nosso plano!</h1>

            <FormularioPagamento/>
        </section>

        <FooterPadrao/>
        </>
    )
}

export default Pagamento;