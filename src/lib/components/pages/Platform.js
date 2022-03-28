import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import { PageContainer } from '../common/layout';
import { simpleApiCall } from '../../utils/apiUtils';
import SpaceDivider from '../common/layout/SpaceDivider';
import CardSet from '../home/CardSet';

const  Platform = props => {

    let { platformId } = useParams();

    let [platform, setPlatform] = useState(null);
    let [errPlatform, setErrPlatform] = useState(null);

    let baseUrl = process.env.REACT_APP_TESTBED_API_BASE_URL

    useEffect(() => simpleApiCall(`${baseUrl}/platforms/${platformId}`, setPlatform, setErrPlatform), []);

    return (
        <PageContainer>
            {platform ?
                <div>
                    <Typography variant="h2">{platform.platform_name}</Typography>
                    <Typography variant="h5">{platform.platform_description}</Typography>
                    <Typography variant="h6">
                        Owned/Maintained by: 
                        <Button
                            component={Link}
                            to={`/organizations/${platform.organization.id}`}
                        >
                            {platform.organization.organization_name}
                        </Button>
                    </Typography>
                    <SpaceDivider />

                    <Typography variant="h5">This platform implements the following GA4GH specification(s)</Typography>
                    <CardSet
                        items={platform.specifications}
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

export default Platform;
