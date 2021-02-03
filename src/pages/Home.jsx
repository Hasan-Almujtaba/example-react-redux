import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DataTable from "../containers/DataTable";
import Button from "react-bootstrap/Button";
import ModalForm from "../containers/ModalForm";

function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
      <ModalForm handleClose={handleClose} show={show} />
      <Row>
        <Col>
          <Button variant="primary" className="my-3" onClick={handleShow}>
            anuin tombol ini
          </Button>
          <DataTable />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
