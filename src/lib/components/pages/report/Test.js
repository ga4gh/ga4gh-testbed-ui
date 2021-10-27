import React from 'react';
import {
    Typography,
    Grid
} from '@mui/material';
import ReportBreadcrumbs from '../../common/navigation/ReportBreadcrumbs';
import StatusChip from '../../common/info/StatusChip';
import ReportInfoTable from '../../common/info/ReportInfoTable';
import SummaryTable from '../../common/info/SummaryTable';
import ReportButtonGroup from '../../common/navigation/ReportButtonGroup';
import ReportButton from '../../common/navigation/ReportButton';
import { formatForDomId } from '../../../utils/stringUtils';
import { formatDate } from '../../../utils/dateUtils';
import Case from './Case';

const Test = props => {
    const breadcrumbs = [
        {
            label: `Phase: ${props.phaseName}`,
            to: formatForDomId([props.phaseName])
        },
        {
            label: `Test: ${props.test.test_name}`,
            to: formatForDomId([props.phaseName, props.test.test_name])
        }
    ]

    const testInfo = {
        header: ["Test Info Key", "Value"],
        rows: [
            {label: "Test Description", value: props.test.test_description},
            {label: "Start Time", value: formatDate(props.test.start_time)},
            {label: "End Time", value: formatDate(props.test.end_time)}
        ]
    }

    const reportButtonGroup = props.test.cases.map(testCase => {
        return {
            status: testCase.status,
            label: `View Case: ${testCase.case_name}`,
            to: formatForDomId([
                props.phaseName,
                props.test.test_name,
                testCase.case_name
            ]),
            size: 'small'
        }
    })

    return (
        <div>
            {/* Breadcrumb */}
            <ReportBreadcrumbs
                id={formatForDomId([
                    props.phaseName,
                    props.test.test_name
                ])}
                breadcrumbs={breadcrumbs}
            />
            
            {/* Status */}
            <StatusChip
                reportLevel="Test"
                status={props.test.status}
            />

            {/* Info & Summary */}
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="body1">
                        <strong>Description: </strong>
                        {props.test.test_description}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1">
                        <strong>Test Status Summary</strong>
                    </Typography>
                    <SummaryTable summary={props.test.summary} /> 
                </Grid>
            </Grid>

            {/* Buttons */}
            <ReportButtonGroup reportButtonGroup={reportButtonGroup} />

            {/* Subcomponent */}
            {props.test.cases.map(testCase => {
                return (
                    <Case
                        testCase={testCase}
                        phaseName={props.phaseName}
                        testName={props.test.test_name}
                    />
                )
            })}
        </div>
    )
}

export default Test;
