import React from 'react';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/styles';
import { CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import theme from './lib/styles/theme';

const AppClient = props => {
    return (
        <CacheProvider value={props.cache}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ThemeProvider>
        </CacheProvider>
    )
}

export default AppClient;
