import { deepOrange, lightGreen, orange, teal } from '@mui/material/colors'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
// Create a theme instance.
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange

      }
    },
    dark: {
      palette: {
        primary: lightGreen,
        secondary: orange

      }
    }
  }
  // ...other properties
})

export default theme