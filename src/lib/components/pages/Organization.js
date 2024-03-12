import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import { PageContainer } from '../common/layout';
import { simpleApiCall } from '../../utils/apiUtils';
import SpaceDivider from '../common/layout/SpaceDivider';
import CardSet from '../home/CardSet';

const  Organization = props => {

    let { organizationId } = useParams();

    let [organization, setOrganization] = useState(null);
    let [errOrganization, setErrOrganization] = useState(null);

    let baseUrl = process.env.REACT_APP_TESTBED_API_BASE_URL
    let basePort = process.env.REACT_APP_TESTBED_API_BASE_PORT

    useEffect(() => simpleApiCall(`${baseUrl}:${basePort}/organizations/${organizationId}`, setOrganization, setErrOrganization), []);

    return (
        <PageContainer>
            {organization ?
                <div>
                    <Typography variant="h2">{organization.organization_name}</Typography>
                    <Button href={organization.organization_url}>View Website</Button>
                    <SpaceDivider />

                    <Typography variant="h5">This organization owns/maintains the following platforms:</Typography>
                    <CardSet
                        items={organization.platforms}
                        label="Platform"
                        name_key="platform_name"
                        description_key="platform_description"
                        endpoint="platforms"
                    />
                    <SpaceDivider />
                </div>
            : null
            }
            
        </PageContainer>
    )
}

export default Organization;
