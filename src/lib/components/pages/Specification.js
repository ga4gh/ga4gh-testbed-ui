import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import { PageContainer } from '../common/layout';
import { simpleApiCall } from '../../utils/apiUtils';
import SpaceDivider from '../common/layout/SpaceDivider';
import CardSet from '../home/CardSet';

const  Specification = props => {

    let { specificationId } = useParams();

    let [specification, setSpecification] = useState(null);
    let [errSpecification, setErrSpecification] = useState(null);

    let baseUrl = process.env.REACT_APP_TESTBED_API_BASE_URL
    let basePort = process.env.REACT_APP_TESTBED_API_BASE_PORT

    useEffect(() => simpleApiCall(`${baseUrl}:${basePort}/specifications/${specificationId}`, setSpecification, setErrSpecification), []);

    return (
        <PageContainer>
            {specification ?
                <div>
                    <Typography variant="h2">Specification: {specification.spec_name}</Typography>
                    <Typography variant="h5">{specification.spec_description}</Typography>
                    <Button href={specification.documentation_url}>View Docs</Button>
                    <Button href={specification.github_url}>View on Github</Button>
                    <SpaceDivider />

                    <Typography variant="h5">Testbeds that test this specification</Typography>
                    <CardSet
                        items={specification.testbeds}
                        label="Testbed"
                        name_key="testbed_name"
                        description_key="testbed_description"
                        endpoint="testbeds"
                    />
                    <SpaceDivider />

                    <Typography variant="h5">Platforms that implement this specification</Typography>
                    <CardSet
                        items={specification.platforms}
                        label="Platform"
                        name_key="platform_name"
                        description_key="platform_description"
                        endpoint="platforms"
                    />

                </div>
            : null
            }
            
        </PageContainer>
    )
}

export default Specification;
