import {
  makeStyles,
  Container,
  AppBar,
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
} from '@material-ui/core';
import './styles.css';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: 'grey',
    height: '100vh',
    width: '100%',
    margin: 0,
  },
  cards: {
    paddingTop: 100,
  },
  card: {
    marginTop: 10,
    maxWidth: 300,
    backgroundColor: 'lightblue',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Container maxWidth="xl">
        <AppBar color="primary">
          <Box p={1}>
            <Typography variant="h4" color="inherit">
              SWAPI HEROES
            </Typography>
          </Box>
        </AppBar>
        <Container className={classes.cards}>
          <Card className={classes.card}>
            <CardContent>
              <Typography color="inherit" variant="h6">
                Luke SkyWalker
              </Typography>
              <Grid container>
                <Grid item xs={5}>
                  <Typography color="inherit">Male: Man</Typography>
                </Grid>
                <Grid item xs={7}>
                  <Typography color="inherit">Homeland: Tatuin 2</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card className={classes.card}>
            <CardContent>
              <Typography color="inherit" variant="h6">
                Luke SkyWalker
              </Typography>
              <Grid container>
                <Grid item xs={5}>
                  <Typography color="inherit">Male: Man</Typography>
                </Grid>
                <Grid item xs={7}>
                  <Typography color="inherit">Homeland: Tatuin 2</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Container>
      </Container>
    </div>
  );
}

export default App;
