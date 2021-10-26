import React from 'react';
import ReportBreadcrumbs from '../../common/navigation/ReportBreadcrumbs';
import StatusChip from '../../common/info/StatusChip';
import { formatForDomId } from '../../../utils/stringUtils';

const Case = props => {

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
        <div>
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
        </div>
    )
}

export default Case;
