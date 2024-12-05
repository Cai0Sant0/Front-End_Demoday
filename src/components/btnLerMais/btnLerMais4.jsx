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
import './CSS/style4.css';

function LerMais4(props) {
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

        <ModalBody className='modal-content4'>
        <h3> Jogos e Atividades para Estimular a Saúde Ocular</h3>
        <p>Incorporar jogos que estimulem a visão e a coordenação motora nas atividades diárias pode ser uma maneira divertida de cuidar da saúde ocular. Jogos como:</p>
        <br />
        <ul>
            <li>Memória</li>
            <li>Quebra-cabeças</li>
            <li>Atividades de caça ao tesouro</li>
        </ul>
        <br />
        <p>São ótimos para desenvolver habilidades visuais. Além disso, atividades que envolvem movimentos, como:</p>
        <br />
        <ul>
            <li>Bola</li>
            <li>Desenhos</li>
        </ul>
        <br />
        <p>Ajudam a aprimorar a percepção espacial e a coordenação olho-mão. O nosso site oferece testes de visão interativos que não apenas entretêm, mas também ajudam os pais a monitorar a saúde ocular dos filhos. Esses jogos podem transformar o aprendizado em uma atividade lúdica e educativa, promovendo o interesse e a conscientização sobre a visão.</p>
        <Button color="danger" onClick={toggle} className='btnFecharModalBlog'>
            Fechar
          </Button>
        </ModalBody>
      </Modal>
    </div>
  );
}

LerMais4.propTypes = {
  className: PropTypes.string,
};

export default LerMais4;