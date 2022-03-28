import React from 'react';
import {
    Breadcrumbs,
    Link
} from '@mui/material';
import reportBreadcrumbsStyles from '../../../styles/common/navigation/reportBreadcrumbsStyles';

const ReportBreadcrumbs = props => {
    const classes = reportBreadcrumbsStyles();

    return (
        <div
            id={props.id}
            className={classes.div}
        >
            <Breadcrumbs separator="/" className={classes.reportBreadcrumbs}>
                {props.breadcrumbs.map(item => {
                    return (
                        <Link
                            color='inherit'
                            href={`#${item.to}`}
                        >
                            {item.label}
                        </Link>
                    )
                })}
            </Breadcrumbs>
        </div>
    )
}

export default ReportBreadcrumbs;