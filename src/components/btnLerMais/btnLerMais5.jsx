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
import './CSS/style5.css';

function LerMais5(props) {
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
        
        <ModalBody className='modal-content5'>
        <h3>Como Escolher a Armação de Óculos Ideal para Seu Filho</h3>
        <p>A escolha da armação dos óculos pode ser uma tarefa divertida, mas é importante considerar alguns fatores para garantir conforto e estilo. Procure armações que sejam:</p>
        <br />
        <ul>
            <li>Leves</li>
            <li>Feitas de materiais resistentes</li>
            <li>Adequadas para a atividade diária das crianças</li>
        </ul>
        <p>O ajuste deve ser perfeito:</p>
        <br />
        <ul>
            <li>Não deve escorregar do nariz</li>
            <li>Não deve pressionar as têmporas</li>
        </ul>
        <br />
        <p>As armações também devem ter proteção UV se a criança for usar ao ar livre. Utilize a nossa ferramenta de análise facial para encontrar a armação ideal, levando em conta o formato         do rosto e as preferências da criança. Além de estética, envolva seu filho na escolha para que ele se sinta mais animado em usar os óculos e aprenda a valorizar a saúde ocular.</p>
        <Button color="danger" onClick={toggle} className='btnFecharModalBlog'>
            Fechar
          </Button>
        </ModalBody>
        
      </Modal>
    </div>
  );
}

LerMais5.propTypes = {
  className: PropTypes.string,
};

export default LerMais5;