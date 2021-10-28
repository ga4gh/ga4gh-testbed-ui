import React from 'react';
import {
    useParams
} from 'react-router-dom';
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

const Report = props => {
    let { testbedId, seriesId, reportId } = useParams();

    // TODO: use non-hardcoded report pulled from API
    const reportObj = defaultReport;
    const reportInfo = {
        header: ["Report Info Key", "Value"],
        rows: [
            {label: "Testbed Name", value: reportObj["testbed_name"]},
            {label: "Testbed Version", value: reportObj["testbed_version"]},
            {label: "Testbed Description", value: reportObj["testbed_description"]},
            {label: "Platform Name", value: reportObj["platform_name"]},
            {label: "Platform Description", value: reportObj["platform_description"]},
            {label: "Start Time", value: formatDate(reportObj["start_time"])},
            {label: "End Time", value: formatDate(reportObj["end_time"])}
        ]
    }
    const inputParameterInfo = {
        header: ["Param Name", "Param Value"],
        rows: Object.keys(reportObj.input_parameters).map(key => {
            return {label: key, value: reportObj.input_parameters[key]}
        })
    }

    return (
        <PageContainer>
            <Typography variant="h5">Test Report</Typography>

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

            <StatusAlert
                reportLevel="Test"
                status={reportObj.status}
                size="full"
            />

            <Typography display="inline" variant="h5">Test Trace</Typography>
            <HelpBubble
                message="Displays the status of each test case, in the order 
                    they were encountered during test execution. Mouse over a
                    cell to see the test case."
            />
            <ProgressBar cases={flattenReportCases(reportObj)} />

            <Typography display="inline" variant="h5">Test Status</Typography>
            <HelpBubble
                message="Shows the status of each phase, test, and test case in
                    table format. Click the 'View' button to see the full
                    report for the corresponding test component."
            />
            <Typography variant="body1">
                <strong>Passed: </strong>
                {reportObj.summary.passed}
                <strong> Warned: </strong>
                {reportObj.summary.warned}
                <strong> Failed: </strong>
                {reportObj.summary.failed}
                <strong> Skipped: </strong>
                {reportObj.summary.skipped}
                <strong> Unknown: </strong>
                {reportObj.summary.unknown}
            </Typography>
            <StatusTable phases={reportObj.phases} />

            <Typography display="inline" variant="h6">Report Info</Typography>
            <HelpBubble
                message="Summary information for this test report, including
                    the testbed that was run, the platform it was run on, and
                    when the tests were executed."
            />
            <ReportInfoTable {...reportInfo} />
                

                
            <Typography display="inline" variant="h6">Input Parameters</Typography>
            <HelpBubble
                message="Input parameters provided to the testbed application."
            />
            <ReportInfoTable {...inputParameterInfo} />
                

            {/* Subcomponent */}
            <Typography display="inline" variant="h5">Full Report</Typography>
            <HelpBubble
                message="Full breakdown of all report phases, tests, and test
                    cases. Displays full log information for each test case."
            />
            {reportObj.phases.map(phase => <Phase phase={phase} />)}

        </PageContainer>
    )
}

export default Report;
