import React, { useEffect, useState } from 'react';
import {
    Typography,
    Button
} from '@mui/material';
import {
    Link
} from 'react-router-dom';
import { PageContainer } from '../common/layout';
import SpaceDivider from '../common/layout/SpaceDivider';
import CardSet from '../home/CardSet';
import { simpleApiCall } from '../../utils/apiUtils';

const Home = props => {

    let [specifications, setSpecifications] = useState([]);
    let [errSpecifications, setErrSpecifications] = useState(null);
    let [testbeds, setTestbeds] = useState([]);
    let [errTestbeds, setErrTestbeds] = useState(null);
    let [organizations, setOrganizations] = useState([]);
    let [errOrganizations, setErrOrganizations] = useState(null);
    let [platforms, setPlatforms] = useState([]);
    let [errPlatforms, setErrPlatforms] = useState(null);

    let baseUrl = process.env.REACT_APP_TESTBED_API_BASE_URL
    let basePort = process.env.REACT_APP_TESTBED_API_BASE_PORT

    useEffect(() => simpleApiCall(`${baseUrl}:${basePort}/specifications`, setSpecifications, setErrSpecifications), []);
    useEffect(() => simpleApiCall(`${baseUrl}:${basePort}/testbeds`, setTestbeds, setErrTestbeds), []);
    useEffect(() => simpleApiCall(`${baseUrl}:${basePort}/organizations`, setOrganizations, setErrOrganizations), []);
    useEffect(() => simpleApiCall(`${baseUrl}:${basePort}/platforms`, setPlatforms, setErrPlatforms), []);

    return (
        <PageContainer>
            <Typography variant="h2">Future Home of the GA4GH Testbed</Typography>
            <Typography variant="h5">Deployment Environment: {process.env.REACT_APP_DEPLOYMENT_ENV}</Typography>
            <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/reports/eab621df-37ad-4441-889e-5f3e5ffc3c27"
            >
                View Demo Report
            </Button>
            <SpaceDivider />

            {/* Testing */}
            <Typography variant="h4">Testing</Typography>
            <Typography variant="h6">
                Specifications represent approved GA4GH technical standards
            </Typography>
            <CardSet
                items={testbeds}
                label="Testbed"
                name_key="testbed_name"
                description_key="testbed_description"
                endpoint="testbeds"
            />
            <SpaceDivider />

            {/* render specification list */}
            <Typography variant="h4">Specifications</Typography>
            <Typography variant="h6">
                Specifications represent approved GA4GH technical standards
            </Typography>
            <CardSet
                items={specifications}
                label="Specification"
                name_key="spec_name"
                description_key="spec_description"
                endpoint="specifications"
            />
            <SpaceDivider />

            {/* render testbed list */}
            <Typography variant="h4">Testbeds</Typography>
            <Typography variant="h6">
                Testbeds are applications that can test a running web service's
                compliance to an underlying GA4GH specification
            </Typography>
            <CardSet
                items={testbeds}
                label="Testbed"
                name_key="testbed_name"
                description_key="testbed_description"
                endpoint="testbeds"
            />
            <SpaceDivider />

            {/* render organization list */}
            <Typography variant="h4">Organizations</Typography>
            <Typography variant="h6">
                Organizations are groups/institutions that have implemented
                one or more GA4GH specifications in their own applications and
                services
            </Typography>
            <CardSet
                items={organizations}
                label="Organization"
                name_key="organization_name"
                description_key="organization_url"
                endpoint="organizations"
            />
            <SpaceDivider />

            {/* render platform list */}
            <Typography variant="h4">Platforms</Typography>
            <Typography variant="h6">
                Platforms are services (or sets of services) that implement
                one or more GA4GH specifications
            </Typography>
            <CardSet
                items={platforms}
                label="Platform"
                name_key="platform_name"
                description_key="platform_description"
                endpoint="platforms"
            />
            <SpaceDivider />
        </PageContainer>
    )
}

export default Home;