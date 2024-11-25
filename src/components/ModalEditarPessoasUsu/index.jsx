import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function ModalEditPessoas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Editar Pessoas
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edição Pessoas</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
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
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Nome da primeira criança</Form.Label>
              <Form.Control
                type="text"
                placeholder="nome da 1° criança"
                autoFocus
                autoComplete={"off"}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Nome da segunda criança</Form.Label>
              <Form.Control
                type="text"
                placeholder="nome da 2° criança"
                autoFocus
                autoComplete={"off"}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Nome da terceira criança</Form.Label>
              <Form.Control
                type="text"
                placeholder="nome da 3° criança"
                autoFocus
                autoComplete={"off"}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalEditPessoas;
