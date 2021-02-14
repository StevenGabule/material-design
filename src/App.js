import React, { useState } from "react";
import {
  Box,
  Button,
  FormControlLabel,
  FormLabel,
  Grid,
  makeStyles,
  Paper,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
    backgroundColor: "#424242",
  },
  control: {
    padding: theme.spacing(2),
  },
}));

function App() {
  const [spacing, setSpacing] = useState(2);
  const classes = useStyles();

  // change the space of columns
  const handleChange = (e) => {
    setSpacing(Number(e.target.value));
  };

  return (
    <>
      <Container
        maxWidth={"sm"}
        style={{ backgroundColor: "#eee", padding: "5%", marginBottom: "5%" }}
        fixed
      >
        <Button variant={"contained"} color={"primary"}>
          Hello World
        </Button>
        <Box color={"teal"} component={"p"} m={1}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet
          aspernatur debitis, distinctio dolor dolores doloribus eum impedit, in
          maiores nisi obcaecati perferendis provident, quo ut vero voluptas!
          Asperiores, quas.
        </Box>
      </Container>

      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={spacing}>
            {[0, 1, 2].map((value) => (
              <Grid key={value} item>
                <Paper className={classes.paper} square={true} />
              </Grid>
            ))}
          </Grid>
        </Grid>{" "}
        {/*Item Grid */}
        <Grid item xs={12}>
          <Paper className={classes.control}>
            <Grid container justify="center">
              <Grid item>
                <FormLabel>Spacing</FormLabel>
                <RadioGroup
                  name="spacing"
                  aria-label="spacing"
                  value={spacing.toString()}
                  onChange={handleChange}
                  row
                >
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                    <FormControlLabel
                      key={value}
                      value={value.toString()}
                      control={<Radio />}
                      label={value.toString()}
                    />
                  ))}
                </RadioGroup>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
