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
  const [userList, setUserList] = useState([])

  const setul = (obj) => {
    const exists = userList.find(title => title.title === obj.title)
    if (!exists) { setUserList([...userList, obj]) }
    else {
      const ul = userList
      ul.splice(ul.indexOf(exists), 1)
      setul(ul)
    }
    console.log(userList)
  }


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
          {/* <Route path="/popular">

          </Route> */}
          <Route path="/films">
            <div className="categorys">
              <MainVid data={
                [data.Action, data.Adventure, data.Comedy, data.Drama, data.Family, data.Fantasy, data.Horror, data.Mystery, data.Romance, data.SciFi, data.Thriller]
              } />
              <ScrollingDiv genre={"Action"} data={data.Action} largeRow={true} set={setSelectedItem} setul={setul} />
              <ScrollingDiv genre={"Adventure"} data={data.Adventure} set={setSelectedItem} setul={setul} />
              <ScrollingDiv genre={"Comedy"} data={data.Comedy} set={setSelectedItem} setul={setul} />
              <ScrollingDiv genre={"Drama"} data={data.Drama} set={setSelectedItem} setul={setul} />
              <ScrollingDiv genre={"Family"} data={data.Family} set={setSelectedItem} setul={setul} />
              <ScrollingDiv genre={"Fantasy"} data={data.Fantasy} set={setSelectedItem} setul={setul} />
              <ScrollingDiv genre={"Horror"} data={data.Horror} set={setSelectedItem} setul={setul} />
              <ScrollingDiv genre={"Mystery"} data={data.Mystery} set={setSelectedItem} setul={setul} />
              <ScrollingDiv genre={"Romance"} data={data.Romance} set={setSelectedItem} setul={setul} />
              <ScrollingDiv genre={"SciFi"} data={data.SciFi} set={setSelectedItem} setul={setul} />
              <ScrollingDiv genre={"Thriller"} data={data.Thriller} set={setSelectedItem} setul={setul} />
            </div>
          </Route>
          <Route path="/series">
            <div className="categorys">
              <MainVid data={
                [data.Crime, data.Documentary, data.Short, data.Sport, data.TVMovie, data.War]
              } />
              <ScrollingDiv genre={"Crime"} data={data.Crime} largeRow={true} set={setSelectedItem} setul={setul} />
              <ScrollingDiv genre={"Documentary"} data={data.Documentary} set={setSelectedItem} setul={setul} />
              <ScrollingDiv genre={"Short"} data={data.Short} set={setSelectedItem} setul={setul} />
              <ScrollingDiv genre={"Sport"} data={data.Sport} set={setSelectedItem} setul={setul} />
              <ScrollingDiv genre={"TVMovie"} data={data.TVMovie} set={setSelectedItem} setul={setul} />
              <ScrollingDiv genre={"War"} data={data.War} set={setSelectedItem} setul={setul} />
            </div>
          </Route>

          <Route path="/mylist">
            <div className="mylistcat">
              <ScrollingDiv genre={"mylist"} data={userList} set={setSelectedItem} setul={setul} />
            </div>
          </Route>


          <Route path="/">
            {selectedItem?.title ? <ClickedVid title={selectedItem} set={setSelectedItem} /> : null}
            <MainVid data={
              [data.Comedy, data.Crime, data.Drama, data.Horror, data.Mystery, data.Romance, data.Sport, data.TVMovie, data.War]
            } />
            <div className="categorys">
              <ScrollingDiv genre={"Comedy"} data={data.Comedy} largeRow={true} set={setSelectedItem} setul={setul} />
              <ScrollingDiv genre={"Crime"} data={data.Crime} set={setSelectedItem} setul={setul} />
              <ScrollingDiv genre={"Drama"} data={data.Drama} set={setSelectedItem} setul={setul} />
              <ScrollingDiv genre={"Horror"} data={data.Horror} set={setSelectedItem} setul={setul} />
              <ScrollingDiv genre={"Mystery"} data={data.Mystery} set={setSelectedItem} setul={setul} />
              <ScrollingDiv genre={"Romance"} data={data.Romance} set={setSelectedItem} setul={setul} />
              <ScrollingDiv genre={"Sport"} data={data.Sport} set={setSelectedItem} setul={setul} />
              <ScrollingDiv genre={"TVMovie"} data={data.TVMovie} set={setSelectedItem} setul={setul} />
              <ScrollingDiv genre={"War"} data={data.War} set={setSelectedItem} setul={setul} />
              {/* <ScrollingDiv category={"Series"} data={data.series} set={setSelectedItem} />  */}
            </div>
          </Route>


        </Switch>

      </div>
    </Router>
  );
}

export default App;


