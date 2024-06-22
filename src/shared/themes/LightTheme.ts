import {createTheme} from '@mui/material';
import { blue, pink  } from '@mui/material/colors';

export const LightTheme = createTheme({
    palette: {
        primary: {
            main: blue[700],
            dark: blue[900],
            light: blue[500],
            contrastText: '#fff',
        },
        secondary: {
            main: pink[500],
            dark: pink[400],
            light: pink[300],
            contrastText: '#fff',
        },
        background: {
            paper: '#fff',
            default: '#f7f6f3'
        }
    }
})