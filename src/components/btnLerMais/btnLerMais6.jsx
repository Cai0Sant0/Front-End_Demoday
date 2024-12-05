import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
} from 'reactstrap';
import PropTypes from 'prop-types';
import './CSS/style6.css';

function LerMais6(props) {
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
        
        <ModalBody className='modal-content6'>
        <h3>Mitos e Verdades sobre a Saúde Ocular Infantil</h3>
        <p>Existem muitos mitos sobre a saúde ocular que podem gerar confusão. Por exemplo, um mito comum é que:</p>
        <br />
        <ul>
            <li>ler no escuro prejudica a visão permanentemente</li>
        </ul>
        <br />
        <p>
        Na verdade, isso pode causar desconforto temporário, mas não danifica os olhos a longo prazo. Outro mito é que:</p>
        <br />
        <ul>
            <li>Usar óculos pode piorar a visão</li>
        </ul>
        <br />
        <p>Na realidade, os óculos corrigem a visão e podem prevenir o agravamento de problemas existentes. Neste post, vamos desmistificar essas e outras ideias erradas, como a crença de que as crianças não precisam de exames de visão até a escola. Educar-se sobre esses mitos é um passo importante para garantir a saúde ocular das crianças, permitindo que os pais tomem decisões informadas sobre cuidados e exames.</p>
        <Button color="danger" onClick={toggle} className='btnFecharModalBlog'>
            Fechar
          </Button>
        </ModalBody>

      </Modal>
    </div>
  );
}

LerMais6.propTypes = {
  className: PropTypes.string,
};

export default LerMais6;