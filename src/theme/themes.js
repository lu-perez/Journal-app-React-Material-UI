import { createTheme } from '@mui/material'
import { red } from '@mui/material/colors'

export const purpleTheme = createTheme({
  palette: {
    primary: {
      main: '#e5e5e5'
    },
    secondary: {
      main: '#385184'
    },
    error: {
      main: red.A400
    }
  }
})
