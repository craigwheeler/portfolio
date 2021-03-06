import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import store from './redux/store';

import App from './pages/main';

OfflinePluginRuntime.install();

declare module 'styled-components' {
  export interface DefaultTheme {
    fontFamily: string;
    backgroundColor: string;
    letterSpacing: string;
    fontSize: string;
    color: string;
  }
}

const primary = {
  fontFamily: 'monospace',
  backgroundColor: '#1b1b1b',
  letterSpacing: '0.50px',
  fontSize: '20px',
  color: '#fff'
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0
  }
  section {
    font-family: ${props => props.theme.fontFamily};
    background-color: ${props => props.theme.backgroundColor};
    letter-spacing: ${props => props.theme.letterSpacing};
    font-size: ${props => props.theme.fontSize};
    color: ${props => props.theme.color};
  }
`;

const Index = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={primary}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  );
};

ReactDOM.render(<Index />, document.getElementById('root'));
