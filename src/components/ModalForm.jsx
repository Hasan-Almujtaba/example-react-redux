import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ModalForm({ handleClose, show, newData }) {
  const initialState = {
    name: "",
    age: "",
    status: "",
  };
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    console.log(e);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    newData(form);
    setForm(initialState);
    handleClose();
  };

  return (
    <div>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>isi gan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Nama</Form.Label>
              <Form.Control
                type="text"
                onChange={handleChange}
                name="name"
                value={form.name}
                placeholder="Masukin Nama"
              />
            </Form.Group>

            <Form.Group controlId="age">
              <Form.Label>Umur</Form.Label>
              <Form.Control
                name="age"
                type="text"
                onChange={handleChange}
                value={form.age}
                placeholder="Masukin Umur"
              />
            </Form.Group>
            <Form.Group controlId="status">
              <Form.Label>Mati kagak</Form.Label>
              <Form.Control
                value={form.status}
                name="status"
                type="text"
                onChange={handleChange}
                placeholder="Masukin Status"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalForm;
