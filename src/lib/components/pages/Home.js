import React, { useEffect, useState } from 'react';
import {
    Typography,
    Button
} from '@mui/material';
import {
    Link
} from 'react-router-dom';
import axios from 'axios';
import { PageContainer } from '../common/layout';
import SpaceDivider from '../common/layout/SpaceDivider';
import CardSet from '../home/CardSet';

const Home = props => {

    let [specifications, setSpecifications] = useState([]);
    let [errSpecifications, setErrSpecifications] = useState(null);
    let [testbeds, setTestbeds] = useState([]);
    let [errTestbeds, setErrTestbeds] = useState(null);
    let [organizations, setOrganizations] = useState([]);
    let [errOrganizations, setErrOrganizations] = useState(null);
    let [platforms, setPlatforms] = useState([]);
    let [errPlatforms, setErrPlatforms] = useState(null);

    const simpleApiCall = (endpoint, dataSetter, errorSetter) => {
        axios.get(process.env.REACT_APP_TESTBED_API_BASE_URL + endpoint)
            .then(response => {
                dataSetter(response.data)
            }, error => {
                errorSetter(error)
            })
    }

    useEffect(() => simpleApiCall("specifications", setSpecifications, setErrSpecifications), []);
    useEffect(() => simpleApiCall("testbeds", setTestbeds, setErrTestbeds), []);
    useEffect(() => simpleApiCall("organizations", setOrganizations, setErrOrganizations), []);
    useEffect(() => simpleApiCall("platforms", setPlatforms, setErrPlatforms), []);

    return (
        <PageContainer>
            <Typography variant="h2">Future Home of the GA4GH Testbed</Typography>
            <Typography variant="h5">Deployment Environment: {process.env.REACT_APP_DEPLOYMENT_ENV}</Typography>
            <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/testbeds/testbedId/series/seriesId/reports/reportId"
            >
                View Sample Report
            </Button>
            <SpaceDivider />

            {/* render specification list */}
            <Typography variant="h4">Specifications</Typography>
            <Typography variant="h6">Specifications are...</Typography>
            <CardSet
                items={specifications}
                label="Specification"
                name_key="spec_name"
                description_key="spec_description"
            />
            <SpaceDivider />

            {/* render testbed list */}
            <Typography variant="h4">Testbeds</Typography>
            <Typography variant="h6">Testbeds are...</Typography>
            <CardSet
                items={testbeds}
                label="Testbed"
                name_key="testbed_name"
                description_key="testbed_description"
            />
            <SpaceDivider />

            {/* render organization list */}
            <Typography variant="h4">Organizations</Typography>
            <Typography variant="h6">Organizations are...</Typography>
            <CardSet
                items={organizations}
                label="Organization"
                name_key="organization_name"
                description_key="organization_url"
            />
            <SpaceDivider />

            {/* render platform list */}
            <Typography variant="h4">Platforms</Typography>
            <Typography variant="h6">Platforms are...</Typography>
            <CardSet
                items={platforms}
                label="Platform"
                name_key="platform_name"
                description_key="platform_description"
            />
            <SpaceDivider />
        </PageContainer>
    )
}

export default Home;