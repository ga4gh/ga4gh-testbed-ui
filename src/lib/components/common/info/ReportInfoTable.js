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
import reportInfoTableStyles from '../../../styles/common/info/reportInfoTableStyles';

const ReportInfoTable = props => {
    const classes = reportInfoTableStyles();

    return (
        <TableContainer component={Paper} className={classes.table}>
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