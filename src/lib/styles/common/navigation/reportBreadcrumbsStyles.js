import { makeStyles } from '@mui/styles';

const reportBreadcrumbsStyles = makeStyles((theme) => ({
    div: {
        marginTop: 50,
        marginRight: 25,
        display: "inline-block"
    },
    reportBreadcrumbs: {
        fontSize: '2.0em',
        color: theme.palette.primary.main
    }
}));

export default reportBreadcrumbsStyles;
