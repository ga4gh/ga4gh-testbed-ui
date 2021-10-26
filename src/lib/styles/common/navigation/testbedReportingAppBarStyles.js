import { makeStyles } from '@mui/styles';

const testbedReportingAppBarStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: 50
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    heading: {
        marginLeft: 20,
        marginRight: 20
    },
    link: {
        color: 'inherit',
        textDecoration: 'none'
    }
}));

export default testbedReportingAppBarStyles;
