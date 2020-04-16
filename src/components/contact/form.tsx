import * as React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';

const ContactForm = () => {
  return (
    <Form name="portfolio-contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
      <FormContainer>
        <input type="hidden" name="form-name" value="portfolio-contact" />
        <input type="hidden" name="bot-field" />
        <Title>Send Me A Message</Title>
        <TextInput type="text" name="name" placeholder="Your Name" />
        <TextInput type="email" name="email" placeholder="Your Email Address" />
        <TextArea name="message" placeholder="Message" />
        <SubmitButton type="submit">Submit Message</SubmitButton>
      </FormContainer>
    </Form>
  );
};

export default ContactForm;

// const IconContainer = styled.div`
//   margin: 25px 0;
// `;

const Form = styled.form`
  display: flex;
  justify-content: center;
`;

const FormContainer = styled.div`
  width: 50%;
  background: #fff;
  border-radius: 2px;
  overflow: hidden;
  padding: 52px 90px 78px 60px;
`;

const Title = styled.div`
  font-family: sans-serif;
  font-size: 30px;
  color: #333333;
  line-height: 1.2;
  text-align: left;
  padding-bottom: 33px;
  @media (max-width: 576px) {
    font-size: 20px;
  }
`;

const TextInput = styled.input`
  font-size: 15px;
  color: #333333;
  line-height: 1.2;
  height: 50px;
  width: 100%;
  margin-bottom: 10px;
  padding: 0 15px 0 15px;
  border: 1px solid #c7c7c7;
  outline: none;
`;

const TextArea = styled.textarea`
  font-size: 15px;
  color: #333333;
  line-height: 1.2;
  height: 100px;
  width: 100%;
  margin-bottom: 10px;
  padding: 15px;
  border: 1px solid #c7c7c7;
  outline: none;
`;

const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  min-width: 200px;
  height: 60px;
  color: #fff;
  font-family: sans-serif;
  font-size: 14px;
  line-height: 1.2;
  text-transform: uppercase;
  background-color: #222;
  outline: none;
  &:hover {
    background-color: #fff;
    color: #222;
    border: 1px solid #222;
    cursor: pointer;
  }
`;
