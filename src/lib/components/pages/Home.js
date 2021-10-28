import React from 'react';
import {
    Typography,
    Button
} from '@mui/material';
import {
    Link
} from 'react-router-dom'
import { PageContainer } from '../common/layout';

const Home = props => {
    return (
        <PageContainer>
            <Typography variant="h5">Future Home of the GA4GH Testbed</Typography>
            <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/testbeds/testbedId/series/seriesId/reports/reportId"
            >
                View Sample Report
            </Button>
        </PageContainer>
    )
    
}

export default Home;