import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function ModalEditInformacoes() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="BtnModalsPerfilUsu">
        Editar Informações
      </Button>

      <Modal show={show} onHide={handleClose} className="modalPerfilUsu">
        <Modal.Header closeButton>
          <Modal.Title>Edição de Informações</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="inputEmail">
              <Form.Label>Mudar Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Novo Email"
                autoFocus
                autoComplete={"off"}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="inputNumCPF"
            >
              <Form.Label>Mudar CPF:</Form.Label>
              <Form.Control
                type="number"
                placeholder="Novo CPF"
                autoFocus
                autoComplete={"off"}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="inputSenha"
            >
              <Form.Label>Nova senha:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Nova Senha"
                autoFocus
                autoComplete={"off"}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}  className="btnModalPerfilUsu">
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

export default ModalEditInformacoes;
