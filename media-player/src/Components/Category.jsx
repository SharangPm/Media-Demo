import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';



function Category() {


  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="d-grid">
        <Button onClick={handleShow} className="btn btn-primary">Add Category</Button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
        <Modal.Title>Category Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form>
        <FloatingLabel
        controlId="floatingInput1"
        label="Category Name"
        className="mb-3"
      >
      <Form.Control type="text" placeholder="Enter a Category Name" />
      </FloatingLabel>

   
      </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Category
