import FooterPadrao from '../../components/footer'
import FormularioPagamento from '../../components/FormsPagamento'
import estilo from './style.module.css' 
import Libras from "../../components/VLibras";


function Pagamento(){
    return (
        <>
       
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