import React from 'react';
import {
    Typography,
    Chip,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from '@mui/material';

const SummaryTable = props => {
    const items = [
        {key: "passed", label: "Test Cases Passed"},
        {key: "warned", label: "Test Cases Passed with Warnings"},
        {key: "failed", label: "Test Cases Failed"},
        {key: "skipped", label: "Test Cases Skipped"},
        {key: "unknown", label: "Test Cases with Unknown Status"}
    ]

    return (
        <TableContainer component={Paper}>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Test Case Status</TableCell>
                        <TableCell>Passed</TableCell>
                        <TableCell>Warned</TableCell>
                        <TableCell>Failed</TableCell>
                        <TableCell>Skipped</TableCell>
                        <TableCell>Unknown</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Count</TableCell>
                        {
                            items.map(item => {
                                return (
                                    <TableCell>{props.summary[item.key]}</TableCell>
                                )
                            })
                        }
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default SummaryTable;