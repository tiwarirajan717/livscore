import './App.css';
import { useState, useEffect, Fragment } from 'react'
import MyCard from './components/MyCard';
import Navbar from './components/Navbar';
import { getMatches } from './api/Api';
import { Grid } from '@material-ui/core';

function App() {

  const [matches, setMatches] = useState([])

  useEffect(() => {
    {
      getMatches()
        .then((data) => {
          setMatches(data.matches)
          console.log(data.matches)
        })
        .catch((error) => alert("could not load data"))
    }
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Grid container>
        <Grid sm="3"></Grid>
        <Grid sm="6">
          {matches.map((match) => (
            <Fragment key={match.unique_id}>
              {match.type == "Twenty20" ? (<MyCard key={match.unique_id} match={match} />) : ("")}
            </Fragment>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
