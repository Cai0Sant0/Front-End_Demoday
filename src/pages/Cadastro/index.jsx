import './style.css'
import fundofamily from '../../assets/images/imagemCadastro/fundofamily.png'
import logo from '../../assets/images/logo/logoTelaCadastro.png'
import { Link } from 'react-router-dom';

function Cadastro() {
    return (
        <>
            <div className="fundoGeralTelaCadastro">

                <div className="fundoCadastro">

                    <div className="formularioCadastroAdulto">
                        <form method="post">
                            <h1 className='tituloCadastroAdulto'>Cadastre-se</h1>
                            <input className="entrada" type="text" placeholder="  Nome" />
                            <br />
                            <input className="entrada" type="email" placeholder="  E-mail" />
                            <br />
                            <input className="entrada" type="text" placeholder="  CPF" />
                            <br />
                            <input className="entrada" type="password" placeholder="  Senha" />
                            <br />
                            <button className="btnConfirmarCadastro">Avançar</button>
                        </form>
                    </div>
                </div>



                <div className="fundoRosaImg">
                    <Link to={"/"}>
                        <img src={logo} alt="Logo" className='logo' />
                    </Link>
                    <img src={fundofamily} alt="" className='fotoadult' />
                </div>

            </div>
        </>

    )
}

export default Cadastro