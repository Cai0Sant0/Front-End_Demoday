import FooterPadrao from '../../components/footer'
import FormularioPagamento from '../../components/FormsPagamento';
import estilo from './style.module.css' 


function Pagamento(){
    return (
        <>
        <h1>Assine agora nosso plano!</h1>

        <section className={estilo.seccaoForms}>

            <FormularioPagamento/>
            
        </section>

        <FooterPadrao/>
        </>
    )
}

export default Pagamento;