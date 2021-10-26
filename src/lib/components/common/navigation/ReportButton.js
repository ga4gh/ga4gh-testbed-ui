import React from 'react';
import {
    Button
} from '@mui/material';

const ReportButton = props => {

    const severities = {
        PASS: "success",
        WARN: "warning",
        FAIL: "error",
        SKIP: "info"
    }
    const color = severities[props.status] || "info";
    const variant = props.variant || "outlined";
    const size = props.size || "medium"

    return (
        <Button
            color={color}
            variant={variant}
            size={size}
            href={`#${props.to}`}
        >
            {props.label}
        </Button>
    )
}

export default ReportButton;