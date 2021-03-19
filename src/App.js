//import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router
} from "react-router-dom";
import './App.css';
import Nav from './components/Nav';
import MainVid from "./components/MainVid"
import ScrollingDiv from "./components/ScrollingDiv"


function App() {

  const [data, setData] = useState([])
  const [selectedItem, setSelectedItem] = useState()

  useEffect(() => {
    const getItems = async () => {
      await fetch("db.json")
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

        <MainVid data={data.films} />
        <div className="categorys">
          {selectedItem}
          <ScrollingDiv category={"Films"} data={data.films} largeRow={true} set={setSelectedItem}/>
          <ScrollingDiv category={"Series"} data={data.series} set={setSelectedItem} />
          <ScrollingDiv category={"Films"} data={data.films} set={setSelectedItem} />
          <ScrollingDiv category={"Series"} data={data.series} set={setSelectedItem} />
        </div>
      </div>
    </Router>
  );
}

export default App;
