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

const ReportInfoTable = props => {
    return (
        <TableContainer component={Paper}>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        {props.header.map(hc => <TableCell>{hc}</TableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        props.rows.map(row => {
                            return (
                                <TableRow>
                                    <TableCell>{row.label}</TableCell>
                                    <TableCell>{row.value}</TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ReportInfoTable;