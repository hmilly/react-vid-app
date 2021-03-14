//import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Nav from './components/Nav';

import MainVid from "./components/MainVid"

import Video from "./components/Videos"
import EachVid from './components/EachVid';

import Series from "./components/Series"
import EachSeries from './components/EachSeries';






function App() {
  const [films, setFilms] = useState([])
  const [series, setSeries] = useState([])


  useEffect(() => {

    const getFilms = async () => {
      await fetch(
        "db.json"


        // }
      )
        .then(res => res.json())
        .then(res => setFilms(res.films))
        .catch(err => console.error(err));
    }

    const getSeries = async () => {
      await fetch(
        "db.json"
      )
        .then(res => res.json())
        .then(res => setSeries(res.series))
        .catch(err => console.error(err));
    }

    getSeries()
    getFilms()

  }, [])

 



  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          {/* <Route path="/series">
            <div className="series">
              {series.map(s => (
                <EachSeries key={s.netflixid} s={s} />
              ))}
            </div>
          </Route>
          <Route path="/films">
            <div className="films">
              {films.map(f => (
                <EachVid key={f.netflixid} f={f} />
              ))}
            </div>
          </Route>
          <Route path="/popular">

          </Route>
          <Route path="/mylist">
  
          </Route> */}

          <Route path="/">
            <MainVid films={films} />
            <Video films={films} EachVid={EachVid} />
            <Series series={series} EachSeries={EachSeries} />





          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
