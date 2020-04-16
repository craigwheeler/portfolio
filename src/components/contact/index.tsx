import * as React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import ContactForm from './form';

const ContactPage = (): JSX.Element => (
  <Container>
    <IconContainer>
      <FontAwesomeIcon icon={faMailBulk} size="2x" />
    </IconContainer>
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

const IconContainer = styled.div`
  margin: 25px 0;
`;
