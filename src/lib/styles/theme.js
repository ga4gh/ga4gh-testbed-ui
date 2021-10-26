import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    status: {
        neutral: '#355e3b'
    },
    palette: {
        primary: {
            main: '#2f75bb'
        },
        secondary: {
            // main: '#4faedc'
            main: '#9f7ab0'
        },
        neutral: {
            main: '#355e3b',
            contrastTest: '#fff'
        }
        // error: {
        //     main: '#e34a3b'
        // },
        // warning: {
        //     main: '#f9a533'
        // },
        // success: {
        //     main: '#8bc53f'
        // }
    },
    
    typography: {
        fontFamily: '"Helvetica Neue"'
    }
});

export default theme;
