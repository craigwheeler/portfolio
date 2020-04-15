import * as React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCog } from '@fortawesome/free-solid-svg-icons';
import { Link, Switch, Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { connect, useDispatch } from 'react-redux';
import { toggleSidebar } from '../../actions';

import HomePage from '../home';
import ContactPage from '../contact';

interface IProps {
  open: boolean;
}

const history = createBrowserHistory();

const App = ({ open }: IProps): JSX.Element => (
  <Router history={history}>
    <SidebarContainer>
      <Burger open={open} />
      <Menu open={open} />
    </SidebarContainer>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/contact" component={ContactPage} />
    </Switch>
  </Router>
);

const Burger = ({ open }: any): JSX.Element => {
  const dispatch = useDispatch();
  return (
    <StyledBurger open={open} onClick={() => dispatch(toggleSidebar(open))}>
      <Line />
      <Line />
      <Line />
    </StyledBurger>
  );
};

const Menu = ({ open }: any): JSX.Element => {
  const dispatch = useDispatch();
  return (
    <StyledMenu open={open}>
      <ul>
        <li>
          <Link to="/" onClick={() => dispatch(toggleSidebar(open))}>
            <FontAwesomeIcon icon={faHome} />
            Home
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => dispatch(toggleSidebar(open))}>
            <FontAwesomeIcon icon={faCog} />
            Contact
          </Link>
        </li>
      </ul>
    </StyledMenu>
  );
};

const mapStateToProps = (state: any) => ({
  open: state.sidebar.open
});
export default connect(mapStateToProps)(App);

const Line = styled.div``;

const SidebarContainer = styled.div`
  background-color: #222;
`;

const StyledBurger = styled.button<{ open?: boolean }>`
  position: absolute;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  &:focus {
    outline: none;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background: ${props => (props.open ? '#0D0C1D' : '#EFFFFA')};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${props => (props.open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    :nth-child(2) {
      opacity: ${props => (props.open ? '0' : '1')};
      transform: ${props => (props.open ? 'translateX(20px)' : 'translateX(0)')};
    }
    :nth-child(3) {
      transform: ${props => (props.open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const StyledMenu = styled.nav<{ open?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  transform: ${props => (props.open ? 'translateX(0)' : 'translateX(-100%)')};
  height: 100vh;
  width: 275px;
  text-align: left;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  @media (max-width: 576px) {
    width: 75%;
  }
  ul {
    height: 60%;
    li {
      padding: 20px 30px;
      list-style: none;
      a {
        font-size: 20px;
        text-transform: uppercase;
        font-weight: bold;
        color: #222;
        text-decoration: none;
        transition: color 0.3s linear;
        &:hover {
          color: #343078;
        }
      }
      @media (max-width: 576px) {
        font-size: 14px;
      }
      svg {
        margin-right: 10px;
      }
    }
  }
`;
