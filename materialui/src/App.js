import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes';
import Create from './pages/Create';
import { createTheme, ThemeProvider } from '@material-ui/core'; // to create custom theme import this createMuiTheme function
import { purple } from '@material-ui/core/colors';
import Layout from './components/Layout';


const theme = createTheme({
  palette: {
    primary: {
      main: '#fefedd'
    },
    secondary: purple
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBolder: 700
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>                    {/* pass the children under this Layout to Layout component as prop */}

          <Switch>
            <Route exact path="/">
              <Notes />
            </Route>

            <Route path="/create">
              <Create />
            </Route>
          </Switch>

        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
