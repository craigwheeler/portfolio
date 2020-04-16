import * as React from 'react';
import styled from 'styled-components';
import ContactForm from './form';

const ContactPage = (): JSX.Element => (
  <Container>
    <ContactForm />
  </Container>
);

export default ContactPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-weight: 500;
`;
