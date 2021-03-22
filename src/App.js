import React, { useState, useEffect } from "react";
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

function App() {
  const [data, setData] = useState([])
  const [selectedItem, setSelectedItem] = useState({})

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


  // "Action"
  // 1: "Adventure"
  // 5: "Comedy"
  // 6: "Crime"
  // 7: "Documentary"
  // 8: "Drama"
  // 9: "Family"
  // 10: "Fantasy"
  // 13: "Horror"
  // 15: "Mystery"
  // 16: "Romance"
  // 17: "Sci-Fi"
  // 19: "Short"
  // 20: "Sport"
  // 22: "TV-Movie"
  // 23: "Thriller"
  // 24: "War"

  return (
    <Router>
      <div className="App">
        <Nav />

        <Switch>
          {/* <Route path="/popular">

          </Route> */}
          <Route path="/films">
            <div className="categorys">
              <ScrollingDiv genre={"Action"} data={data.Action} largeRow={true} set={setSelectedItem} />
              <ScrollingDiv genre={"Adventure"} data={data.Adventure} set={setSelectedItem} />
              <ScrollingDiv genre={"Comedy"} data={data.Comedy} set={setSelectedItem} />
              <ScrollingDiv genre={"Drama"} data={data.Drama} set={setSelectedItem} />
              <ScrollingDiv genre={"Family"} data={data.Family} set={setSelectedItem} />
              <ScrollingDiv genre={"Fantasy"} data={data.Fantasy} set={setSelectedItem} />
              <ScrollingDiv genre={"Horror"} data={data.Horror} set={setSelectedItem} />
              <ScrollingDiv genre={"Mystery"} data={data.Mystery} set={setSelectedItem} />
              <ScrollingDiv genre={"Romance"} data={data.Romance} set={setSelectedItem} />
              <ScrollingDiv genre={"SciFi"} data={data.SciFi} set={setSelectedItem} />
              <ScrollingDiv genre={"Thriller"} data={data.Thriller} set={setSelectedItem} />
            </div>
          </Route>
          <Route path="/series">
            <div className="categorys">
              <ScrollingDiv genre={"Crime"} data={data.Crime} largeRow={true} set={setSelectedItem} />
              <ScrollingDiv genre={"Documentary"} data={data.Documentary} set={setSelectedItem} />
              <ScrollingDiv genre={"Short"} data={data.Short} set={setSelectedItem} />
              <ScrollingDiv genre={"Sport"} data={data.Sport} set={setSelectedItem} />
              <ScrollingDiv genre={"TVMovie"} data={data.TVMovie} set={setSelectedItem} />
              <ScrollingDiv genre={"War"} data={data.War} set={setSelectedItem} />
            </div>
          </Route>
          <Route path="/">
            {selectedItem?.title ? <ClickedVid title={selectedItem} set={setSelectedItem} /> : null}
            <MainVid data={data} />
            <div className="categorys">
              <ScrollingDiv genre={"Comedy"} data={data.Comedy} largeRow={true} set={setSelectedItem} />
              <ScrollingDiv genre={"Crime"} data={data.Crime} set={setSelectedItem} />
              <ScrollingDiv genre={"Drama"} data={data.Drama} set={setSelectedItem} />
              <ScrollingDiv genre={"Horror"} data={data.Horror} set={setSelectedItem} />
              <ScrollingDiv genre={"Mystery"} data={data.Mystery} set={setSelectedItem} />
              <ScrollingDiv genre={"Romance"} data={data.Romance} set={setSelectedItem} />
              <ScrollingDiv genre={"Sport"} data={data.Sport} set={setSelectedItem} />
              <ScrollingDiv genre={"TVMovie"} data={data.TVMovie} set={setSelectedItem} />
              <ScrollingDiv genre={"War"} data={data.War} set={setSelectedItem} />
              {/* <ScrollingDiv category={"Series"} data={data.series} set={setSelectedItem} />  */}
            </div>
          </Route>


        </Switch>

      </div>
    </Router>
  );
}

export default App;


