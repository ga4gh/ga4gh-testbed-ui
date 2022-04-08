import React from 'react';
import { Alert } from '@mui/material';
import statusAlertStyles from '../../../styles/common/info/statusAlertStyles';

const StatusAlert = props => {
    const classes = statusAlertStyles();

    const text = `${props.reportLevel} Status: ${props.status}`;
    const severities = {
        PASS: "success",
        WARN: "warning",
        FAIL: "error",
        SKIP: "info",
        UNKNOWN: "error"
    }
    const widthClasses = {
        full: classes.sizeFull,
        medium: classes.sizeMedium,
        small: classes.sizeSmall
    }
    const variant = props.variant || "filled"

    return (
        <Alert
            className={widthClasses[props.size]}
            severity={severities[props.status]}
            variant={variant}
        >
            {text}
        </Alert>
    )
}

export default StatusAlert;