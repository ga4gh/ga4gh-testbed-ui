import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from '@mui/material';
import StatusChip from './StatusChip';
import statusTableStyles from '../../../styles/common/info/statusTableStyles';
import ReportButton from '../navigation/ReportButton';
import { formatForDomId } from '../../../utils/stringUtils';

const StatusTable = props => {
    const classes = statusTableStyles()

    const rowClasses = {
        PASS: classes.passRow,
        WARN: classes.warnRow,
        FAIL: classes.failRow,
        SKIP: classes.skipRow,
        UNKNOWN: classes.failRow
    }

    return (
        <TableContainer component={Paper} className={classes.table}>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Phase</TableCell>
                        <TableCell>Test</TableCell>
                        <TableCell>Case</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>View</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.phases.map(phase => {
                        const phaseRow = (
                            <TableRow className={rowClasses[phase.status]}>
                                <TableCell>{phase.phase_name}</TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell>
                                    <StatusChip
                                        status={phase.status}
                                    />
                                </TableCell>
                                <TableCell>
                                    <ReportButton
                                        useColor={true}
                                        useIcon={false}
                                        variant="contained"
                                        label="View"
                                        status={phase.status}
                                        to={formatForDomId([
                                            phase.phase_name
                                        ])}
                                     />
                                </TableCell>
                            </TableRow>
                        )

                        if (! phase.hasOwnProperty("tests")) {
                            return [phaseRow];
                        }

                        const testAndCaseRows = phase.tests.map(test => {
                            const testRow = (
                                <TableRow className={rowClasses[test.status]}>
                                    <TableCell>{phase.phase_name}</TableCell>
                                    <TableCell>{test.test_name}</TableCell>
                                    <TableCell></TableCell>
                                    <TableCell>
                                        <StatusChip
                                            status={test.status}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <ReportButton
                                            useColor={true}
                                            useIcon={false}
                                            variant="contained"
                                            label="View"
                                            status={test.status}
                                            to={formatForDomId([
                                                phase.phase_name,
                                                test.test_name
                                            ])}
                                        />
                                    </TableCell>
                                </TableRow>
                            )

                            const caseRows = test.cases.map(testCase => {
                                return (
                                    <TableRow className={rowClasses[testCase.status]}>
                                        <TableCell>{phase.phase_name}</TableCell>
                                        <TableCell>{test.test_name}</TableCell>
                                        <TableCell>{testCase.case_name}</TableCell>
                                        <TableCell>
                                            <StatusChip
                                                status={testCase.status}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <ReportButton
                                                useColor={true}
                                                useIcon={false}
                                                variant="contained"
                                                label="View"
                                                status={testCase.status}
                                                to={formatForDomId([
                                                    phase.phase_name,
                                                    test.test_name,
                                                    testCase.case_name
                                                ])}
                                            />
                                        </TableCell>
                                    </TableRow>
                                )
                            })

                            return [testRow, ...caseRows]
                        })

                        return ([
                            phaseRow,
                            ...testAndCaseRows
                        ])
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )

}

export default StatusTable;