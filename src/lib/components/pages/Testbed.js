import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import { PageContainer } from '../common/layout';
import { simpleApiCall } from '../../utils/apiUtils';
import SpaceDivider from '../common/layout/SpaceDivider';
import CardSet from '../home/CardSet';

const  Testbed = props => {

    let { testbedId } = useParams();

    let [testbed, setTestbed] = useState(null);
    let [errTestbed, setErrTestbed] = useState(null);

    let baseUrl = process.env.REACT_APP_TESTBED_API_BASE_URL

    useEffect(() => simpleApiCall(`${baseUrl}/testbeds/${testbedId}`, setTestbed, setErrTestbed), []);

    return (
        <PageContainer>
            {testbed ?
                <div>
                    <Typography variant="h2">Testbed: {testbed.testbed_name}</Typography>
                    <Typography variant="h5">{testbed.testbed_description}</Typography>
                    <Button href={testbed.repo_url}>View Github Repo</Button>
                    <Button href={testbed.dockerhub_url}>View Dockerhub Image</Button>
                    <Button href={testbed.dockstore_url}>View Dockstore Workflow</Button>
                    <SpaceDivider />

                    <Typography variant="h5">This application tests the following GA4GH specification(s)</Typography>
                    <CardSet
                        items={testbed.specifications}
                        label="Specification"
                        name_key="spec_name"
                        description_key="spec_description"
                        endpoint="specifications"
                    />
                    <SpaceDivider />
                </div>
            : null
            }
        </PageContainer>
    )
}

export default Testbed;
