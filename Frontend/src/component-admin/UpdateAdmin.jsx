import React from 'react';
import { FormAdmin } from "../component-admin/FormAdmin";
import { Modal } from "react-bootstrap";


export const UpdateAdmin = ({isOpen, onClose, adminEdit}) => {
    if(!isOpen){
        return null;
    }
  return (
    <>
     <>
        <Modal show={isOpen}>
          <Modal.Header>
            <Modal.Title className="text-dark">ID: {adminEdit._id}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormUser
              userProp={adminEdit}
              titleButton="Actualizar"
              option={2}
            ></FormUser>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-danger" onClick={onClose}>
              Cerrar
            </button>
          </Modal.Footer>
        </Modal>
      </>
    </>
  )
}


