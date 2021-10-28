import { makeStyles } from '@mui/styles';

const progressBarStyles = makeStyles((theme) => ({
    div: {
        marginTop: 25,
        marginBottom: 25,
        width: '100%',
        height: '1.5em'
    },
    cellPass: {
        backgroundColor: theme.palette.success.light,
        border: `1px solid ${theme.palette.success.main}`,
        height: '1.5em',
        display: 'inline-block'
    },
    cellWarn: {
        backgroundColor: theme.palette.warning.light,
        border: `1px solid ${theme.palette.warning.main}`,
        height: '1.5em',
        display: 'inline-block'
    },
    cellFail: {
        backgroundColor: theme.palette.error.light,
        border: `1px solid ${theme.palette.error.main}`,
        height: '1.5em',
        display: 'inline-block'
    },
    cellSkip: {
        backgroundColor: theme.palette.info.light,
        border: `1px solid ${theme.palette.info.main}`,
        height: '1.5em',
        display: 'inline-block'
    }
}));

export default progressBarStyles;