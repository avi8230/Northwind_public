import { Button, ButtonGroup, Checkbox, createMuiTheme, FormControlLabel, makeStyles, TextField, ThemeProvider, Typography } from "@material-ui/core";
import { green, orange } from "@material-ui/core/colors";

// npm i @material-ui/icons
// https://mui.com/material-ui/material-icons/
import { Cancel, MailOutline, Send } from "@material-ui/icons";

import "./ContactUs.css";
import useTitle from "../../../Services/useTitle";

function ContactUs(): JSX.Element {

    useTitle("Northwind | ContactUs");

    const createClasses = makeStyles({
        checkbox: {
            color: Math.random() < 0.5 ? "magenta" : "maroon",
        }
    });

    const classes = createClasses();

    const theme = createMuiTheme({
        typography: {
            fontFamily: "Helvetica",
            fontSize: 15,
            h3: {
                fontSize: 30
            }
        },
        palette: {
            primary: {
                main: green[600]
            },
            secondary: {
                main: orange[600]
            }
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <div className="ContactUs Box">

                <Typography variant="h3" className="Headline"> <MailOutline /> Contact Us</Typography>

                <TextField label="Name" variant="outlined" className="TextBox" />
                <br />

                <TextField label="Email" variant="outlined" type="email" className="TextBox" />
                <br />

                <TextField label="Message" variant="outlined" className="TextBox" />
                <br />

                <FormControlLabel control={<Checkbox />} label="Send me promotional emails" className={classes.checkbox} />
                <br />

                <ButtonGroup variant="contained" fullWidth>
                    <Button color="primary" startIcon={<Send />}>Send</Button>
                    <Button color="secondary" startIcon={<Cancel />}>Cancel</Button>
                </ButtonGroup>

            </div>
        </ThemeProvider>
    );
}

export default ContactUs;
