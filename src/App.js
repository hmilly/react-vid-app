import React, { useContext, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Nav from './components/Nav';
import MainVid from "./components/MainVid"
import ScrollingDiv from "./components/ScrollingDiv"
import ClickedVid from "./components/ClickedVid"
import { store } from "./context"

function App() {
  const { state } = useContext(store)
  const [data, setData] = useState([])

  useEffect(() => {
    const getItems = async () => {
      await fetch("db.json")
        //   //  fetch("https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-random-movies&page=6", {
        //   //   "method": "GET",
        //   //   "headers": {
        // -------------------------------- update key info  -----------------------------------------
        //   //   }
        //   // })
        .then(res => res.json())
        .then(res => setData(res))
        .catch(err => console.error(err));
    }
    getItems()
  }, [])

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/popular">
          {state.seeComponent ? <ClickedVid /> : null}
            <MainVid data={data} />
              <ScrollingDiv genre={"Action"} data={data.Action} largeRow={true} />
          </Route>
          <Route path="/films">
          {state.seeComponent ? <ClickedVid /> : null}
            <div className="categorys">
              <MainVid data={
                [
                  data.Action, data.Adventure, data.Comedy,
                  data.Drama, data.Family, data.Fantasy, data.Horror,
                  data.Mystery, data.Romance, data.SciFi, data.Thriller
                ]
              } />
              <ScrollingDiv genre={"Action"} data={data.Action} largeRow={true} />
              <ScrollingDiv genre={"Adventure"} data={data.Adventure} />
              <ScrollingDiv genre={"Comedy"} data={data.Comedy} />
              <ScrollingDiv genre={"Drama"} data={data.Drama} />
              <ScrollingDiv genre={"Family"} data={data.Family} />
              <ScrollingDiv genre={"Fantasy"} data={data.Fantasy} />
              <ScrollingDiv genre={"Horror"} data={data.Horror} />
              <ScrollingDiv genre={"Mystery"} data={data.Mystery} />
              <ScrollingDiv genre={"Romance"} data={data.Romance} />
              <ScrollingDiv genre={"SciFi"} data={data.SciFi} />
              <ScrollingDiv genre={"Thriller"} data={data.Thriller} />
            </div>
          </Route>

          <Route path="/series">
           {state.seeComponent ? <ClickedVid /> : null}
            <div className="categorys">
              <MainVid data={
                [
                  data.Crime, data.Documentary,
                  data.Short, data.Sport,
                  data.TVMovie, data.War
                ]
              } />
              <ScrollingDiv genre={"Crime"} data={data.Crime} largeRow={true} />
              <ScrollingDiv genre={"Documentary"} data={data.Documentary} />
              <ScrollingDiv genre={"Short"} data={data.Short} />
              <ScrollingDiv genre={"Sport"} data={data.Sport} />
              <ScrollingDiv genre={"TVMovie"} data={data.TVMovie} />
              <ScrollingDiv genre={"War"} data={data.War} />
            </div>
          </Route>

          <Route path="/mylist">
            <div className="mylistcat">
              <ScrollingDiv genre={"mylist"} />
            </div>
          </Route>

          <Route path="/">
          {state.seeComponent ? <ClickedVid /> : null}
            <MainVid data={
              [
                data.Comedy, data.Crime, data.Drama,
                data.Horror, data.Mystery, data.Romance,
                data.Sport, data.TVMovie, data.War
              ]
            } />
            <div className="categorys">
              <ScrollingDiv genre={"Comedy"} data={data.Comedy} largeRow={true} />
              <ScrollingDiv genre={"Crime"} data={data.Crime} />
              <ScrollingDiv genre={"Drama"} data={data.Drama} />
              <ScrollingDiv genre={"Horror"} data={data.Horror} />
              <ScrollingDiv genre={"Mystery"} data={data.Mystery} />
              <ScrollingDiv genre={"Romance"} data={data.Romance} />
              <ScrollingDiv genre={"Sport"} data={data.Sport} />
              <ScrollingDiv genre={"TVMovie"} data={data.TVMovie} />
              <ScrollingDiv genre={"War"} data={data.War} />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;