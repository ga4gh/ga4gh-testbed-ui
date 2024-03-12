import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
    Typography,
    Grid
} from '@mui/material';
import StatusAlert from '../../common/info/StatusAlert';
import {
    PageContainer
} from '../../common/layout';
import { defaultReport } from '../../../constants/defaultReports';
import ProgressBar from '../../common/info/ProgressBar';
import StatusTable from '../../common/info/StatusTable';
import SummaryTable from '../../common/info/SummaryTable';
import ReportInfoTable from '../../common/info/ReportInfoTable';
import Phase from './Phase';
import { formatForDomId } from '../../../utils/stringUtils';
import { formatDate } from '../../../utils/dateUtils';
import { flattenReportCases } from '../../../utils/reportUtils';
import HelpBubble from '../../common/info/HelpBubble';
import ReportButtonGroup from '../../common/navigation/ReportButtonGroup';
import { simpleApiCall } from '../../../utils/apiUtils';

const Report = props => {

    let { reportId } = useParams();

    let [report, setReport] = useState(null);
    let [errReport, setErrReport] = useState(null);

    let baseUrl = process.env.REACT_APP_TESTBED_API_BASE_URL
    let basePort = process.env.REACT_APP_TESTBED_API_BASE_PORT

    useEffect(() => simpleApiCall(`${baseUrl}:${basePort}/reports/${reportId}`, setReport, setErrReport), []);

    return (
        <PageContainer>
            {report ?
                <div>
                    <Typography variant="h5">Test Report</Typography>
                    <StatusAlert
                        reportLevel="Test"
                        status={report.status}
                        size="full"
                    />

                    <Typography display="inline" variant="h5">Test Trace</Typography>
                    <HelpBubble
                        message="Displays the status of each test case, in the order 
                            they were encountered during test execution. Mouse over a
                            cell to see the test case."
                    />
                    <ProgressBar cases={flattenReportCases(report)} />

                    <Typography display="inline" variant="h5">Test Status</Typography>
                    <HelpBubble
                        message="Shows the status of each phase, test, and test case in
                            table format. Click the 'View' button to see the full
                            report for the corresponding test component."
                    />
                    <Typography variant="body1">
                        <strong>Passed: </strong>
                        {report.summary.passed}
                        <strong> Warned: </strong>
                        {report.summary.warned}
                        <strong> Failed: </strong>
                        {report.summary.failed}
                        <strong> Skipped: </strong>
                        {report.summary.skipped}
                        <strong> Unknown: </strong>
                        {report.summary.unknown}
                    </Typography>

                    <StatusTable phases={report.phases} />

                    <Typography display="inline" variant="h6">Report Info</Typography>
                    <HelpBubble
                        message="Summary information for this test report, including
                            the testbed that was run, the platform it was run on, and
                            when the tests were executed."
                    />
                    <ReportInfoTable
                        header={["Report Info Key", "Value"]}
                        rows={[
                            {label: "Report ID", value: report.id},
                            {label: "Start Time", value: formatDate(report.start_time)},
                            {label: "End Time", value: formatDate(report.end_time)}
                        ]}
                    />

                    <Typography display="inline" variant="h6">Input Parameters</Typography>
                    <HelpBubble
                        message="Input parameters provided to the testbed application."
                    />
                    <ReportInfoTable 
                        header={["Param Name", "Param Value"]}
                        rows={
                            Object.keys(report.input_parameters).map(key => {
                                return {label: key, value: report.input_parameters[key]}
                            })
                        }
                    />

                    <Typography display="inline" variant="h5">Full Report</Typography>
                    <HelpBubble
                        message="Full breakdown of all report phases, tests, and test
                            cases. Displays full log information for each test case."
                    />
                    {report.phases.map(phase => <Phase phase={phase} />)}
                </div>
            : null
            }
            

            {/*
            <Typography variant="body1">
                <strong>Testbed: </strong>
                {reportObj.testbed_name}
            </Typography>
            <Typography variant="body1">
                <strong>Testbed Version: </strong>
                {reportObj.testbed_version}
            </Typography>
            <Typography variant="body1">
                <strong>Platform: </strong>
                {reportObj.platform_name}
            </Typography>
        */}

            {/* Subcomponent */}
            {/*
            <Typography display="inline" variant="h5">Full Report</Typography>
            <HelpBubble
                message="Full breakdown of all report phases, tests, and test
                    cases. Displays full log information for each test case."
            />
            {reportObj.phases.map(phase => <Phase phase={phase} />)}
            */}

        </PageContainer>
    )
}

export default Report;
