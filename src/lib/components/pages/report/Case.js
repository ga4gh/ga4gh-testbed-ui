import React from 'react';
import ReportBreadcrumbs from '../../common/navigation/ReportBreadcrumbs';
import StatusChip from '../../common/info/StatusChip';
import { formatForDomId } from '../../../utils/stringUtils';
import { Typography } from '@mui/material';
import caseStyles from '../../../styles/pages/report/caseStyles';
import Log from './Log';

const Case = props => {
    const classes = caseStyles();

    const breadcrumbs = [
        {
            label: `Phase: ${props.phaseName}`,
            to: formatForDomId([props.phaseName])
        },
        {
            label: `Test: ${props.testName}`,
            to: formatForDomId([props.phaseName, props.testName])
        },
        {
            label: `Case: ${props.testCase.case_name}`,
            to: formatForDomId([props.phaseName, props.testName, props.testCase.case_name])
        }
    ]

    return (
        <div className={classes.div}>
            {/* Breadcrumb */}
            <ReportBreadcrumbs
                id={formatForDomId([
                    props.phaseName,
                    props.testName,
                    props.testCase.case_name
                ])}
                breadcrumbs={breadcrumbs}
            />
            
            {/* Status */}
            <StatusChip
                reportLevel="Case"
                status={props.testCase.status}
            />

            {/* Info */}
            <Typography variant="body1">
                <strong>Description: </strong>
                {props.testCase.case_description}
            </Typography>
            <Typography variant="body1">
                <strong>Message: </strong>
                {props.testCase.message}
            </Typography>

            {/* Message Log */}
            {props.testCase.hasOwnProperty("log_messages") && props.testCase.log_messages.length > 0
                ? <Log messages={props.testCase.log_messages} />
                : null
            }

        </div>
    )
}

export default Case;
