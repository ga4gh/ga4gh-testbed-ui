import { makeStyles } from '@mui/styles';

const statusTableStyles = makeStyles((theme) => ({
    table: {
        marginBottom: 25
    },
    passRow: {
        borderBottom: `2px solid ${theme.palette.success.main}`,
        backgroundColor: theme.palette.success.light + "60"
    },
    warnRow: {
        borderBottom: `2px solid ${theme.palette.warning.main}`,
        backgroundColor: theme.palette.warning.light + "60"
    },
    failRow: {
        borderBottom: `2px solid ${theme.palette.error.main}`,
        backgroundColor: theme.palette.error.light + "60"
    },
    skipRow: {
        borderBottom: `2px solid ${theme.palette.info.main}`,
        backgroundColor: theme.palette.info.light + "60"
    }
}))

export default statusTableStyles;