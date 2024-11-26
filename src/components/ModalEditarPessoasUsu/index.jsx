import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import './style.css';

function ModalEditPessoas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" className="BtnModalsPerfilUsu" onClick={handleShow}>
        Editar Pessoas
      </Button>

      <Modal show={show} onHide={handleClose} className="modalPerfilUsu">
        <Modal.Header closeButton>
          <Modal.Title>Edição Pessoas</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="inputResponsavel">
              <Form.Label>Nome Responsável</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nome do responsável"
                autoFocus
                autoComplete={"off"}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="inputCrianca01"
            >
              <Form.Label>Nome da primeira criança</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nome da 1° criança"
                autoFocus
                autoComplete={"off"}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="inputCrianca02"
            >
              <Form.Label>Nome da segunda criança</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nome da 2° criança"
                autoFocus
                autoComplete={"off"}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="inputCrianca03"
            >
              <Form.Label>Nome da terceira criança</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nome da 3° criança"
                autoFocus
                autoComplete={"off"}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose} className="btnModalPerfilUsu">
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleClose}  className="btnModalPerfilUsu">
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalEditPessoas;
