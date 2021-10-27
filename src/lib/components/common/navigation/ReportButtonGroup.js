import React from 'react';
import ReportButton from './ReportButton';
import reportButtonGroupStyles from '../../../styles/common/navigation/reportButtonGroupStyles';

const ReportButtonGroup = props => {
    const classes = reportButtonGroupStyles();

    return (
        <div className={classes.group}>
            {
                props.reportButtonGroup.map(button => {
                    return (
                        <ReportButton
                            status={button.status}
                            variant="outlined"
                            size={button.size}
                            label={button.label}
                            to={button.to}
                        />
                    )
                })
            }
        </div>

    )
}

export default ReportButtonGroup;