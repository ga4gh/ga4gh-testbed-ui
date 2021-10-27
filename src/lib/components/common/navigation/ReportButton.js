import React from 'react';
import {
    Button
} from '@mui/material';
import CheckIcon from '@mui/icons-material/CheckCircleOutline';
import WarnIcon from '@mui/icons-material/WarningAmber';
import FailIcon from '@mui/icons-material/ErrorOutline';
import SkipIcon from '@mui/icons-material/Block';
import reportButtonStyles from '../../../styles/common/navigation/reportButtonStyles';

const ReportButton = props => {
    const classes = reportButtonStyles();

    const severities = {
        PASS: "success",
        WARN: "warning",
        FAIL: "error",
        SKIP: "info"
    }

    const icons = {
        PASS: <CheckIcon />,
        WARN: <WarnIcon />,
        FAIL: <FailIcon />,
        SKIP: <SkipIcon />
    }

    const useColor = props.useColor === undefined ? true: props.useColor;
    const useIcon = props.useIcon === undefined ? true: props.useIcon;
    const startIcon = useIcon ? icons[props.status] : null;
    const color = useColor ? severities[props.status] : "neutral";
    const variant = props.variant || "outlined";
    const size = props.size || "medium"

    return (
        <span className={classes.button}>
            <Button
                startIcon={startIcon}
                color={color}
                variant={variant}
                size={size}
                href={`#${props.to}`}
            >
                {props.label}
            </Button>
        </span>
    )
}

export default ReportButton;