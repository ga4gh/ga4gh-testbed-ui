import React, { useState, useEffect } from 'react';
import {
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button
} from '@mui/material';
import { useParams, Link } from 'react-router-dom';
import { simpleApiCall } from '../../utils/apiUtils';
import { PageContainer } from '../common/layout';
import SpaceDivider from '../common/layout/SpaceDivider';

const ReportSeries = props => {

    let { reportSeriesId } = useParams();

    let [reportSeries, setReportSeries] = useState(null);
    let [errReportSeries, setErrReportSeries] = useState(null);

    let baseUrl = process.env.REACT_APP_TESTBED_API_BASE_URL
    let basePort = process.env.REACT_APP_TESTBED_API_BASE_PORT

    useEffect(() => simpleApiCall(`${baseUrl}:${basePort}/report-series/${reportSeriesId}`, setReportSeries, setErrReportSeries), []);

    return (
        <PageContainer>
            {reportSeries ?
                <div>
                    <Typography variant="h5">Report Series: {reportSeries.id}</Typography>
                    <br />
                    <Typography variant="h5">Testbed: {reportSeries.testbed.testbed_name}</Typography>
                    <Typography variant="h6">{reportSeries.testbed.testbed_description}</Typography>
                    <br />
                    <Typography variant="h5">Platform: {reportSeries.platform.platform_name}</Typography>
                    <Typography variant="h6">{reportSeries.platform.platform_description}</Typography>
                    <SpaceDivider />

                    <Typography variant="h5">Reports</Typography>
                    <TableContainer component={Paper}>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Id</TableCell>
                                    <TableCell>Start Time</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell>View</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {reportSeries.hasOwnProperty("reports") && reportSeries.reports.length > 0
                                ?
                                    reportSeries.reports.map(report => {
                                        return (
                                            <TableRow>
                                                <TableCell>{report.id}</TableCell>
                                                <TableCell>{report.start_time}</TableCell>
                                                <TableCell>{report.status}</TableCell>
                                                <TableCell>
                                                    <Button
                                                        component={Link}
                                                        to={`/reports/${report.id}`}
                                                    >
                                                        View
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        )
                                    })
                                : null
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            : null
            }

        </PageContainer>
    )
}

export default ReportSeries;
