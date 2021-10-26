import React from 'react';
import {
    Typography,
    Grid,
    Chip
} from '@mui/material';
import ReportBreadcrumbs from '../../common/navigation/ReportBreadcrumbs';
import StatusChip from '../../common/info/StatusChip';
import StatusAlert from '../../common/info/StatusAlert';
import ReportInfoTable from '../../common/info/ReportInfoTable';
import SummaryTable from '../../common/info/SummaryTable';
import ReportButton from '../../common/navigation/ReportButton';
import { formatForDomId } from '../../../utils/stringUtils';
import { formatDate } from '../../../utils/dateUtils';
import Test from './Test';

const Phase = props => {

    const breadcrumbs = [
        {
            label: `Phase: ${props.phase.phase_name}`,
            to: formatForDomId([props.phase.phase_name])
        }
    ]
    
    const phaseInfo = {
        header: ["Phase Info Key", "Value"],
        rows: [
            {label: "Phase Description", value: props.phase.phase_description},
            {label: "Start Time", value: formatDate(props.phase.start_time)},
            {label: "End Time", value: formatDate(props.phase.end_time)}
        ]
    }

    return (
        <div>
            {/* Breadcrumb */}
            <ReportBreadcrumbs
                id={formatForDomId([props.phase.phase_name])}
                breadcrumbs={breadcrumbs}
            />

            {/* Status */}
            <StatusChip
                reportLevel="Phase"
                status={props.phase.status}
            />

            {/* Info & Summary */}
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h6">Phase Info</Typography>
                    <ReportInfoTable {...phaseInfo} /> 
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6">Status Summary</Typography>
                    <SummaryTable summary={props.phase.summary} /> 
                </Grid>
            </Grid>

            {/* Buttons */}
            <Typography display="inline" variant="h6">Tests: </Typography>
            {
                props.phase.tests.map(test => {
                    return (
                        <ReportButton
                            status={test.status}
                            variant="outlined"
                            size="small"
                            label={test.test_name}
                            to={formatForDomId([
                                props.phase.phase_name,
                                test.test_name
                            ])}
                        />
                    )
                })
            }

            {/* Subcomponent */}
            {props.phase.tests.map(test => {
                return (
                    <Test
                        test={test}
                        phaseName={props.phase.phase_name}
                    />
                )
            })}
        </div>
    )
}

export default Phase;
