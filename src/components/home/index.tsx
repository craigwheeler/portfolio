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
      <Title>Craig Wheeler</Title>
      <SubTitle>Front-end Engineer</SubTitle>
      <Caption>
        Hello <span>👋</span> I'm a Front-end Engineer from Tampa, FL with experience building web applications using
        modern web tools. I specialize in JavaScript and have professional experience working with TypeScript, React,
        Redux and GraphQL. Take a look at my work or get in touch!
      </Caption>
      <IconContainer>
        <Link href="https://www.linkedin.com/in/craigawheeler/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </Link>
        <Link href="https://github.com/craigwheeler" target="_blank">
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </Link>
        <Link href="https://codepen.io/craigwheeler" target="_blank">
          <FontAwesomeIcon icon={faCodepen} size="lg" />
        </Link>
        <Link href="https://twitter.com/iamnumber2407" target="_blank">
          <FontAwesomeIcon icon={faTwitter} size="lg" />
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

const Title = styled.div`
  font-family: 'Alfa Slab One', cursive;
  letter-spacing: 2px;
  font-size: 40px;
  width: 50%;
`;

const SubTitle = styled.div`
  letter-spacing: 2px;
  font-size: 22px;
  width: 50%;
  margin: 25px 0;
  text-transform: uppercase;
`;

const Caption = styled.div`
  font-size: 14px;
  line-height: 1.5;
  font-weight: 200;
  width: 50%;
  span {
    font-size: 20px;
  }
`;

const IconContainer = styled.div`
  margin: 25px 0;
  width: 50%;
`;

const Link = styled.a`
  margin: 0 10px;
  color: #fff;
  &:hover {
    color: #fff;
  }
`;
