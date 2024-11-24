import './style.css'


function FormularioPagamento(){
    return(
        <>
         <section id="login">
            <div id="imagem">
              
            </div>
            <div id="form">
                <h1>Assinatura Plano</h1>
                <p>Escolha a opção desejada e coloque as informações necessárias</p>
                <div className='formasPagar'>
                    <button>Debito</button>
                    <button>Credito</button>
                    <button>Pix</button>
                </div>
                <form  method="post" autoComplete="off">
                    <div className="campo">
                     
                    </div>
                    <div className="campo">
                       
                    </div>
                </form>
            </div>
        </section>
        </>
    )
}

export default FormularioPagamento;