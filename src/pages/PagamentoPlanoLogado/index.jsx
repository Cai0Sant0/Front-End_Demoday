import FormularioPagamento from '../../components/FormsPagamento'
import estilo from './style.module.css' 
import Topo from "../../components/ComponenteEscrolaPraCima"
import FooterPadraoLogado from '../../components/footerLogado'


function PagamentoLogado(){
    return (
        <>
       
       <Topo/>


        <section className={estilo.seccaoForms}>

            <h1 className={estilo.titulo}>Assine agora nosso plano!</h1>

            <FormularioPagamento/>
        </section>

        <FooterPadraoLogado/>
        </>
    )
}

export default PagamentoLogado;