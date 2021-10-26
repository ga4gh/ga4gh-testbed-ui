import { makeStyles } from '@mui/styles';

const statusAlertStyles = makeStyles((theme) => ({
    sizeFull: {
        width: "100%",
        marginBottom: 25
    },
    sizeMedium: {
        maxWidth: '50%',
        marginBottom: 25
    },
    sizeSmall: {
        maxWidth: '25%',
        marginBottom: 25
    }
}))

export default statusAlertStyles;