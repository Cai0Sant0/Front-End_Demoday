import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';

const CardJogo = (props) => {

  return (
      <div className="card">
        <img src={props.img} alt="ImagemJOgo" className='imgCardHome' />
        <div className="card__content" style={{backgroundColor:props.corFundo}}>
          <p className="card__description">{props.desc}</p>
          {<Link to={"/jogos"} className='LinkParaJogoHome'>Jogue Agora</Link>}
        </div>
      </div>
  );
}

export default CardJogo;
