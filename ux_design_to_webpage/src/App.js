import { Grid } from '@material-ui/core';

import Header from './Header';
import Content from './Content';

function App() {
  return (
    <Grid container direction="column">

      <Grid item>
        <Header/>
      </Grid>

      <Grid item container alignItems={'center'} justifyContent={'center'}>

        <Content/>

      </Grid>

    </Grid>
  );
}

export default App;
