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
import './CSS/style2.css';

function LerMais2(props) {
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
        
        <ModalBody className='modal-content2'>
        <h3> A Importância da Luz Natural para a Visão das Crianças</h3>
        <p>A exposição à luz natural é fundamental para o desenvolvimento saudável da visão. Estudos indicam que crianças que passam mais tempo ao ar livre têm menor risco de desenvolver miopia. A luz natural ajuda na liberação de dopamina, um neurotransmissor que inibe o alongamento excessivo do globo ocular, que é associado à miopia. Incentive seu filho a brincar fora, explorar a natureza e praticar esportes, como:</p>
        <br />
        <ul>
            <li>futebol</li>
            <li>ciclismo</li>
            <li>passeios no parque</li>
        </ul>
        <br />
        <p>Essas atividades não só promovem a saúde ocular, mas também são ótimas para o desenvolvimento físico, social e emocional. Além disso, a interação com outras crianças ao ar livre contribui para habilidades sociais e de resolução de problemas.</p>
        <Button color="secondary" onClick={toggle}>
            Fechar
          </Button>
        </ModalBody>
          
      </Modal>
    </div>
  );
}

LerMais2.propTypes = {
  className: PropTypes.string,
};

export default LerMais2;