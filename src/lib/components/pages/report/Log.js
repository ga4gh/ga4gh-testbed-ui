import React from 'react';
import { Typography } from '@mui/material';

const Log = props => {
    return (
        <div>
            {props.messages.map(message => {
                return (
                    <Typography>{message}</Typography>
                )
            })}
        </div>
    )
}

export default Log;