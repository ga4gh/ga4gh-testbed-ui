import React from 'react';
import {
    Typography,
    Grid,
    Chip
} from '@mui/material';
import ReportBreadcrumbs from '../../common/navigation/ReportBreadcrumbs';
import StatusChip from '../../common/info/StatusChip';
import SummaryTable from '../../common/info/SummaryTable';
import ReportButtonGroup from '../../common/navigation/ReportButtonGroup';
import ReportButton from '../../common/navigation/ReportButton';
import { formatForDomId } from '../../../utils/stringUtils';
import { formatDate } from '../../../utils/dateUtils';
import Test from './Test';
import phaseStyles from '../../../styles/pages/report/phaseStyles';

const Phase = props => {
    const classes = phaseStyles();

    const breadcrumbs = [
        {
            label: `Phase: ${props.phase.phase_name}`,
            to: formatForDomId([props.phase.phase_name])
        }
    ]

    const reportButtonGroup = props.phase.tests.map(test => {
        return {
            status: test.status,
            label: `View Test: ${test.test_name}`,
            to: formatForDomId([props.phase.phase_name, test.test_name]),
            size: 'large'
        }
    })

    return (
        <div className={classes.div}>
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
                    <Typography variant="body1">
                        <strong>Description: </strong>
                        {props.phase.phase_description}
                    </Typography>
                </Grid>
            </Grid>

            {/* Subcomponent */}
            {props.phase.hasOwnProperty("tests")
            ?
                props.phase.tests.map(test => {
                    return (
                        <Test
                            test={test}
                            phaseName={props.phase.phase_name}
                        />
                    )
                })
            : null}
        </div>
    )
}

export default Phase;
