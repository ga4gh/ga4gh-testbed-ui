import React from 'react';
import {
    Tooltip
} from '@mui/material';
import {
    Help
} from '@mui/icons-material';

const HelpBubble = props => {
    return (
        <Tooltip title={props.message}>
            <Help color='primary' fontSize="small" />
        </Tooltip>
    )
}

export default HelpBubble;
