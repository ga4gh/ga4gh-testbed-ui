import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import TestbedReportingAppBar from './lib/components/common/navigation/TestbedReportingAppBar';
import Report from './lib/components/pages/report/Report';
import theme from './lib/styles/theme';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <TestbedReportingAppBar />
                <Switch>
                    <Route path='/testbeds/:testbedId/series/:seriesId/reports/:reportId' component={Report} />
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App;
