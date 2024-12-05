import { Link } from 'react-router-dom';
import estilo from './style.module.css';

function Login02(){

    function VerificaLogin(){

    }

    return(
        <>
        <main className={estilo.corpoPrincipal}>

            <section className={estilo.seccaoImg}>

            </section>
            <section className={estilo.seccaoLogin}>
                <h1 className={estilo.tituloLogin}>Login Te Vejo!</h1>
                <div className={estilo.formLogin}>
                    <label htmlFor="usuEmail">Email:</label>
                    <input type="email" name="emailUsu" id="usuEmail" required placeholder='Seu Email' />

                    <label htmlFor="usuSenha">Senha:</label>
                    <input type="password" name="senhaUsu" id="usuSenha" placeholder='Sua senha' />

                    <p>Ainda não possui cadastro? {<Link to={"/cadastro"}>Cadastra-se</Link>}</p>

                    <button onClick={VerificaLogin()}>Logar</button>
                </div>
            </section>

        </main>
        </>
    )
}

export default Login02;