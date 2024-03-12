import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
    Button,
    Typography,
    Grid,
    Card,
    CardActions,
    CardContent
} from '@mui/material';
import { PageContainer } from '../common/layout';
import { simpleApiCall } from '../../utils/apiUtils';
import SpaceDivider from '../common/layout/SpaceDivider';
import CardSet from '../home/CardSet';
const  Platform = props => {

    let { platformId } = useParams();

    let [platform, setPlatform] = useState(null);
    let [errPlatform, setErrPlatform] = useState(null);

    let baseUrl = process.env.REACT_APP_TESTBED_API_BASE_URL
    let basePort = process.env.REACT_APP_TESTBED_API_BASE_PORT

    useEffect(() => simpleApiCall(`${baseUrl}:${basePort}/platforms/${platformId}`, setPlatform, setErrPlatform), []);

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

                    <Typography variant="h5">The following test reports are available for this platform:</Typography>
                    <Grid container spacing={2}>
                        {platform.report_series.map(item => {
                            return (
                                <Grid item>
                                    <Card sx={{ minWidth: 275 }}>
                                        <CardContent>
                                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                Report Series - {item.id}
                                            </Typography>
                                            <Typography variant="h5" component="div">
                                                Testbed: {item.testbed.testbed_name}
                                            </Typography>
                                            <Typography variant="body2">
                                                {item.testbed.testbed_description}
                                                <br />
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button
                                                component={Link}
                                                to={`/report-series/${item.id}`}
                                            >
                                                View Reports
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            )
                        })}
                    </Grid>
                </div>
            : null
            }
        </PageContainer>
    )
}

export default Platform;
