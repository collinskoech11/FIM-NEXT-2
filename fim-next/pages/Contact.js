import React from "react";
import NavPage from '../components/NavPage'
import FooterPage from '../components/FooterPage'

// reactstrap components
import { FormGroup, Form , Input } from "reactstrap";

function Contact() {
  return (
    <>
    <NavPage/>
      <Form>
        <FormGroup>
          <label className=" form-control-label" htmlFor="example-text-input">
            Text
          </label>
          <Input
            defaultValue="John Snow"
            id="example-text-input"
            type="text"
          ></Input>
        </FormGroup>
        <FormGroup>
          <label className=" form-control-label" htmlFor="example-email-input">
            Email
          </label>
          <Input
            defaultValue="@example.com"
            id="example-email-input"
            type="email"
          ></Input>
        </FormGroup>
        
        <FormGroup>
          <label className=" form-control-label" htmlFor="example-tel-input">
            Phone
          </label>
          <Input
            defaultValue="40-(770)-888-444"
            id="example-tel-input"
            type="tel"
          ></Input>
        </FormGroup>
        
        <FormGroup>
          <label className=" form-control-label" htmlFor="example-number-input">
            Number
          </label>
          <Input
            defaultValue="23"
            id="example-number-input"
            type="number"
          ></Input>
        </FormGroup>
        
        
       
      
      </Form>
      <FooterPage/>
    </>
  );
}

export default Contact;