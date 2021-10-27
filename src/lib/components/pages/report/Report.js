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
import ReportButton from '../../common/navigation/ReportButton';
import SummaryTable from '../../common/info/SummaryTable';
import ReportInfoTable from '../../common/info/ReportInfoTable';
import Phase from './Phase';
import { formatForDomId } from '../../../utils/stringUtils';
import { formatDate } from '../../../utils/dateUtils';
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
    const reportButtonGroup = reportObj.phases.map(phase => {
        return (
            {
                status: phase.status,
                label: `View Phase: ${phase.phase_name}`,
                to: formatForDomId([phase.phase_name]),
                size: 'large'
            }
        )
    })
    

    return (
        <PageContainer>
            <Typography variant="h2">Report Info</Typography>
            <StatusAlert
                reportLevel="Report"
                status={reportObj.status}
                size="full"
            />

            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h6">Report Info</Typography>
                    <ReportInfoTable {...reportInfo} />
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="h6">Report Status Summary</Typography>
                    <SummaryTable summary={reportObj.summary} />
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="h6">Input Parameters</Typography>
                    <ReportInfoTable {...inputParameterInfo} />
                </Grid>
            </Grid>

            {/* Buttons */}
            <ReportButtonGroup reportButtonGroup={reportButtonGroup} />
            
            {/* Subcomponent */}
            {reportObj.phases.map(phase => <Phase phase={phase} />)}

        </PageContainer>
    )
}

export default Report;
