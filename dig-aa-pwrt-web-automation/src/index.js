import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import { ThemeProvider } from '@material-ui/styles'
import { Provider } from 'react-redux'
import store from './store'
import theme from './theme'

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <App />
        </Provider>
    </ThemeProvider>
    ,document.getElementById('root')
);

// expose store when run in Cypress
if (window.Cypress) {
    window.store = store
}
