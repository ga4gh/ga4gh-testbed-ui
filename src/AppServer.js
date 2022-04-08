import React from 'react';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/styles';
import { CssBaseline } from '@mui/material';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import theme from './lib/styles/theme';

const AppServer = props => {
    return (
        <CacheProvider value={props.cache}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <StaticRouter {...props}>
                    <App />
                </StaticRouter>
            </ThemeProvider>
        </CacheProvider>
    )
}

export default AppServer;
