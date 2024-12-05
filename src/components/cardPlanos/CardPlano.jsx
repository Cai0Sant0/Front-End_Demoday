import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const CardPlano = (props) => {
  return (
    <div className="book" style={{ backgroundColor: props.CorfundoCartao02 }}>
      <div className="ConteudoPlano">
        <h5 className="tituloCardPlano">Benefícios</h5>
        <ul className="ListaCardPlano">
          <li className="itemCardPlano">{props.bene01}</li>
          <li className="itemCardPlano">{props.bene02}</li>
          <li className="itemCardPlano">{props.bene03}</li>
          <li className="itemCardPlano">{props.bene04}</li>
        </ul>

        {
          <Link to={props.caminhoBtn} className="LinkCardPlano">
            {props.txtBtn}
          </Link>
        }
      </div>
      <div className="cover" style={{ background: props.CorfundoCartao }}>
        <h3 className="TituloPlano">
          {props.ValorPlano}

          <p className="TipoPlano">{props.TipoPlano}</p>
        </h3>

        <p className="PasseMouse">Passe o mouse ou clique!</p>
      </div>
    </div>
  );
};

export default CardPlano;
