import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'


function VideoCard({video}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>

   <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" width={"100%"} height={"250px"} onClick={handleShow} src={video.url} />
      <Card.Body>
        <div className="d-flex justify-content-between">
        <Card.Title>{video.caption}</Card.Title>
        
        <button className='btn text-danger'><i class="fa-solid fa-trash"></i></button>
        </div>
      </Card.Body>
    </Card>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="315" src={`${video.link}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </Modal.Body>
   
      </Modal>
      
    </>
  )
}

export default VideoCard
