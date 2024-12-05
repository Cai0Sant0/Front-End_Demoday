import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalBody,
  Form,
  FormGroup,
} from 'reactstrap';
import PropTypes from 'prop-types';
import './CSS/style.css';

function LerMais(props) {
  const { className } = props;
  const [modal, setModal] = useState(false);
  const [backdrop, setBackdrop] = useState(true);
  const [keyboard, setKeyboard] = useState(true);

  const toggle = () => setModal(!modal);

  return (

    <div>
      <Form  inline onSubmit={(e) => e.preventDefault()}>
        <Button className="btnLerMais" color="light" onClick={toggle}>
        Continuar Lendo 
        </Button>
      </Form>

      <Modal
        isOpen={modal}
        toggle={toggle}
        className={className}
        backdrop={backdrop}
        keyboard={keyboard}
      >
        <ModalBody className='modal-content1'>

        <h3>Sinais de Alerta: Quando Consultar um Oftalmologista</h3>
        
        <p>Os pais devem estar atentos a certos comportamentos que podem indicar problemas de visão nas crianças. Sinais como:</p>
        <br />
        <ul>
            <li>dificuldade para ler</li>
            <li>confundir letras ou palavras</li>
            <li>fechar um olho ao olhar para objetos</li>
            <li>piscar excessivamente</li>
        </ul>
        <br />
        <p>Além disso, fique atento a queixas de dores de cabeça frequentes ou cansaço visual após atividades que exigem foco. Se seu filho evitar atividades que envolvem leitura ou trabalhos manuais, isso também pode ser um sinal de alerta. Uma consulta ao oftalmologista é importante para garantir que qualquer problema seja identificado e tratado o mais rápido possível. Lembre-se: um diagnóstico precoce pode fazer toda a diferença na correção de problemas visuais.</p>
        
          <Button color="secondary" onClick={toggle}>
            Fechar
          </Button>

          </ModalBody>
      </Modal>
    </div>
  );
}

LerMais.propTypes = {
  className: PropTypes.string,
};

export default LerMais;