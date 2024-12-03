import './style.css'
import fundoLogin from '../../assets/images/imagemLogin/fundoLogin.jpg';
import {Link} from 'react-router-dom';

function Login() {
    return (
        <>
            <div className='Corpo'>
                <div className="zona">
                    <img className="imgFundoLogin" src={fundoLogin} alt="" />
                    <div className="login">
                        <div className="text">
                            <h1 className="title">Fazer login!</h1>
                        </div>
                        <div className="FormLogin">
                            <form method="post">
                                <label>E-mail</label>
                                <input className="insertInfo" type="email" placeholder="Digite seu email" />
                                <label>Senha</label>
                                <input className="insertInfo" type="password" placeholder="Digite sua senha" />
                            </form>
                            <p className="conta">Ainda não tem conta? <Link className="conta" to={"/cadastro"}>Cadastre-se.</Link></p>
                        </div>
                        <div className="btnLogin">
                            <button className="loginBtn">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;