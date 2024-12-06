import estilo from "./style.module.css";
import imgCartoes from '../../assets/images/cartoes.webp'
import CardPagamento from "../CardPagamento";


function FormularioPagamento() {
  return (
    <>
      <div className={estilo.container}>
        <form method = "post" action="">
          <div className={estilo.row}>
            <div className={estilo.column}>
              <h3 className={estilo.title}>Informações pagamento</h3>
              <div className={estilo.inputBox}>
                <span>Nome Completo: </span>
                <input
                  type="text"
                  name="nomeUsuario"
                  id="nomeUsu"
                  placeholder="Seu nome"
                  autoComplete="off"
                />
              </div>
              <div className={estilo.inputBox}>
                <span>Email: </span>
                <input
                  type="email"
                  name="emailUsuario"
                  id="emailUsu"
                  placeholder="exemplo@exemplo.com"
                  autoComplete="off"
                />
              </div>
              <div className={estilo.inputBox}>
                <span>Endereço: </span>
                <input
                  type="text"
                  name="enderecoUsuario"
                  id="enderecoUsu"
                  placeholder="Seu endereço"
                  autoComplete="off"
                />
              </div>
              <div className={estilo.inputBox}>
                <span>Cidade: </span>
                <input
                  type="text"
                  name="cidadeUsuario"
                  id="cidadeUsu"
                  placeholder="São Paulo"
                  autoComplete="off"
                />
              </div>
              <div className={estilo.flex}>
                <div className={estilo.inputBox}>
                  <span>País: </span>
                  <input
                    type="text"
                    name="paisUsuario"
                    id="paisUsu"
                    placeholder="Brasil"
                    autoComplete="off"
                  />
                </div>
                <div className={estilo.inputBox}>
                  <span>Cep: </span>
                  <input
                    type="text"
                    name="cepUsuario"
                    id="cepUsu"
                    placeholder="03373-080"
                    pattern="\d{5}-\d{3}"
                    autoComplete="off"
                  />
                </div>
              </div>
            </div>

            <div className={estilo.column}>
              <h3 className={estilo.title}>Pagamento</h3>
              <div className={estilo.inputBox}>
                <span>Formas de pagamento: </span>
                <img src={imgCartoes} alt="imagens de formasa de pagamento" />
              </div>
              <div className={estilo.inputBox}>
                <span>Nome no cartão: </span>
                <input
                  type="text"
                  name="nomeCartaoUsuario"
                  id="nomeCartaoUsu"
                  placeholder="Caio MS Barbosa"
                  autoComplete="off"
                />
              </div>
              <div className={estilo.inputBox}>
                <span>Número do cartão: </span>
                <input
                  type="number"
                  name="numeroCartaoUsuario"
                  id="numeroCartaoUsu"
                  placeholder="1111 2222 3333 4444"
                  pattern="\d{4}-\d{4}-\d{4}-\d{4}"
                  autoComplete="off"
                />
              </div>
              <div className={estilo.inputBox}>
                <span>Mês vencimento: </span>
                <input
                  type="text"
                  name="vencimentoMesCartaoUsuario"
                  id="vencimentoMesCartaoUsu"
                  placeholder="Agosto"
                />
              </div>
              <div className={estilo.flex}>
                <div className={estilo.inputBox}>
                  <span>Ano Vencimento: </span>
                  <input
                    type="text"
                    name="vencimentoAnoCartaoUsuario"
                    id="vencimentoAnoCartaoUsu"
                    placeholder="2025"
                    autoComplete="off"
                  />
                </div>
                <div className={estilo.inputBox}>
                  <span>CVV: </span>
                  <input
                    type="number"
                    name="cvvCartaoUsuario"
                    id="cvvCartaoUsu"
                    placeholder="123"
                    autoComplete="off"
                  />
                </div>
              </div>
            </div>
          </div>

          <button type="submit" className={estilo.btn}>Comprar</button>
        </form>


        <div className={estilo.corpoCardCompra}>
        <CardPagamento/>
        </div>
      </div>
    </>
  );
}

export default FormularioPagamento;
