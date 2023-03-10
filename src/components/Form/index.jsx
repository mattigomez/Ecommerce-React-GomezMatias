import React from 'react';
import { useForm } from "react-hook-form";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const FormComp = ({confirmPurchase, formVis, setFormVis}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues
      } = useForm();
    
      const onSubmit = (dataDelFormulario) => {
        confirmPurchase(dataDelFormulario)
      }; // your form submit function which will invoke after successful validation

      const handleClose = () => {
        setFormVis (false);
      }
    
      return (
        <>
  
        <Modal show={formVis} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Checkout</Modal.Title>
          </Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body>
          <label>Nombre</label>
          <input
            {...register("nombre", {
              required: true,
              minLength: 2,
            })}
          />
          {errors?.nombre?.type === "required" && <p>Es necesario completar el campo nombre</p>}
          {errors?.nombre?.type === "minLength" && (
            <p>El nombre debe superar los 2 caracteres</p>
          )}
          <br />
          <label>Email</label>
          <input type='email' name='email1' {...register("email1", { minLength: 3 , required: true})} />
          {errors?.email1?.type === "minLength" && (
            <p>El mail debe tener al menos 3 caracteres</p>
          )}
          {errors?.email1?.type === "required" && <p>Es necesario completar el campo email</p>}
          <br />
          <label>Re-Ingrese su Email</label>
          <input type='email' name='email2'{...register("email2", { minLength: 3 , required: true, validate:{equalMails:mail2=>mail2===getValues().email1}})} />
          {errors?.email2?.type === "minLength" && (
            <p>El mail debe tener al menos 3 caracteres</p>
          )}
          {errors?.email2?.type === "equalMails" && (<p>Los mails ingresados deben coincidir</p>)}
          <br />
          <label>Telefono</label>
          <input type="number" {...register("telefono", { minLength: 10, maxLength: 10, required: true })} />
          {errors?.telefono?.type === "minLength" && (
            <p>El telefono debe tener 10 digitos</p>
          )}
          {errors?.telefono?.type === "required" && <p>Es necesario completar el campo telefono</p>}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Confirmar Compra
            </Button>
          </Modal.Footer>
        </form>
        </Modal>
      </>

       
      );
}

export default FormComp