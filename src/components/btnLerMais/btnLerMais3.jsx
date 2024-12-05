import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  Form,
  FormGroup,
} from 'reactstrap';
import PropTypes from 'prop-types';
import './CSS/style3.css';

function LerMais3(props) {
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
        
        <ModalBody className='modal-content3'>
        <h3>Como criar um ambiente favorável à saúde ocular em casa?</h3>
        <p>Manter a iluminação adequada em casa é crucial, especialmente durante atividades que exigem concentração visual. Utilize luzes suaves e evite a iluminação direta nos olhos, o que pode causar desconforto e fadiga ocular. Ao criar um espaço para leitura ou estudo, escolha áreas bem iluminadas com luz natural sempre que possível. Estabeleça regras para pausas regulares durante o uso de telas, como a regra 20-20-20:</p>
        <br />
        <ul>
            <li>a cada 20 minutos, a criança deve olhar para algo a 20 pés (aproximadamente 6 metros) de distância por 20 segundos</li>
        </ul>
        <br />
        <p>Isso ajuda a relaxar os músculos oculares. Adicionalmente, incentive a postura correta ao ler ou usar dispositivos, garantindo que a tela esteja na altura dos olhos e a uma distância confortável.</p>
        <Button color="secondary" onClick={toggle}>
            Fechar
          </Button>
        </ModalBody>
        
          
        
      </Modal>
    </div>
  );
}

LerMais3.propTypes = {
  className: PropTypes.string,
};

export default LerMais3;