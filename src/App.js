import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';
import TestbedReportingAppBar from './lib/components/common/navigation/TestbedReportingAppBar';
import Home from './lib/components/pages/Home';
import Report from './lib/components/pages/report/Report';

const App = () => {
    return (
        <div>
            <TestbedReportingAppBar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/testbeds/:testbedId/series/:seriesId/reports/:reportId' component={Report} />
            </Switch>
        </div>
    )
}

export default App;
