import { createMuiTheme } from "@material-ui/core"
import { primaryColor, neutralColor } from "./colors"

const theme = createMuiTheme({
    palette:{
        primary:{
            main: primaryColor,
            contrastext: "black"
        },
        text:{
            primary: neutralColor
        }
    }
})

export default theme