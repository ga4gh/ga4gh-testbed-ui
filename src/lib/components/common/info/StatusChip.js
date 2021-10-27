import React from 'react';
import { Chip } from '@mui/material';
import CheckIcon from '@mui/icons-material/CheckCircleOutline';
import WarnIcon from '@mui/icons-material/WarningAmber';
import FailIcon from '@mui/icons-material/ErrorOutline';
import SkipIcon from '@mui/icons-material/Block';


const StatusChip = props => {

    const reportLevel = props.reportLevel || "";
    const text = `${reportLevel} Status: ${props.status}`;
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

    return (
        <Chip
            icon={icons[props.status]}
            color={severities[props.status]}
            variant="contained"
            label={text}
        />
    )
}

export default StatusChip;