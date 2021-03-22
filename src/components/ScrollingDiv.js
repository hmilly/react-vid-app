import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player/lazy'

export default function ScrollingDiv({ genre, data, largeRow, set }) {
  const [items, setItems] = useState([])

  const hover = (e) => {
    console.log(e.target.parentNode)
    if (e.target.parentNode.className === "title") {
      e.target.parentNode.className += " hover-title"
    }
  }
  const hoverOut = (e) => {



    
      e.target.parentNode.className = "title"

      

  }


  useEffect(() => {
    const getAllItems = async () =>
      await setItems(data)
    getAllItems()
  }, [data])

  let allItems
  if (items) {
    allItems =
      items.map((title, i) => (
        <div key={title.imdb_id}
          className="title"
        // onClick={() => { set(title) }}
        // onMouseOver={(e) => hover(e)}
        // onMouseLeave={(e) => hoverOut(e)}
        >
          <ReactPlayer
            className={largeRow ? "large-vid" : "normal-vid"}

            light={true}
            url={`https://www.youtube.com/embed/${title.youtube_trailer_key}`}
            alt={title.title}

      
          />
        </div>
      ))
  }

  return (
    <>
      <h1 className="category-name">{genre}</h1>
      <div className="scrolling-div">
        {allItems}
      </div>
    </>
  )
}



