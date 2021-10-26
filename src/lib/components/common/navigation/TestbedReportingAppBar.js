import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography
} from '@mui/material';
import {
    Link
} from 'react-router-dom'
import testbedReportingAppBarStyles from '../../../styles/common/navigation/testbedReportingAppBarStyles';

const TestbedReportingAppBar = () => {
    const classes = testbedReportingAppBarStyles();

    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Typography variant="h6" className={classes.heading}>
                    <Link to='/' className={classes.link}>
                        GA4GH Testbed
                    </Link>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default TestbedReportingAppBar;
