import * as React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter, faCodepen } from '@fortawesome/free-brands-svg-icons';

export interface IProps {
  message: string;
}

export const Home = (props: IProps) => {
  return (
    <Container>
      <IconContainer>
        <Link href="">
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </Link>
        <Link href="">
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </Link>
        <Link href="">
          <FontAwesomeIcon icon={faTwitter} size="lg" />
        </Link>
        <Link href="">
          <FontAwesomeIcon icon={faCodepen} size="lg" />
        </Link>
      </IconContainer>
    </Container>
  );
};

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

const Link = styled.a`
  margin: 5px;
  color: #fff;
  &:hover {
    color: #fff;
  }
`;
