import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player/lazy'

export default function ScrollingDiv({ genre, data, largeRow, set }) {
  const [items, setItems] = useState([])
  const [hoveredItem, setHoveredItem] = useState()

  const hover = (e) => {
    console.log(e)
    if (e.target.className === "player" && !hoveredItem) {
      setHoveredItem(true)
      e.target.className = "hover-vid"
      e.target.nextSibling.className = "hover"
    } else if (e.target.className === "react-player__preview" && !hoveredItem) {
      setHoveredItem(true)
      e.target.parentElement.className = "hover-vid"
      e.target.parentElement.nextSibling.className = "hover"
    }
  }


  const hoverOut = (e) => {
    if (e.target.className === "hover-vid" && hoveredItem) {
      setHoveredItem(false)
      e.target.className = "player"
      e.target.nextSibling.className = "hover hidden"
    } else if (e.target.className === "react-player__preview" && hoveredItem) {
      setHoveredItem(false)
      e.target.parentElement.className = "player"
      e.target.parentElement.nextSibling.className = "hover hidden"
    }

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
          className={largeRow ? "large-vid" : "normal-vid"}
          // onClick={() => { set(title) }}
          onMouseOver={(e) => hover(e)}
          onMouseOut={(e) => hoverOut(e)}
        >
          <ReactPlayer
            className="player"
            width="100%"
            height="100%"
            light={true}
            url={`https://www.youtube.com/embed/${title.youtube_trailer_key}`}
          />
          <div className="hover hidden">
            <div className="hover-div-l">
              <div className="hover-details">
                <p>P</p>
                <p>L</p>
                <p>U</p>
                <p>D</p>
              </div>
              <div className="hover-rating">
                <p>{title.imdb_rating}% match</p>
                <p>{title.rated}</p>
                <p>{title.runtime - 60 < 60 ? `1h ${title.runtime - 60}m` : `${title.runtime}m`}</p>
              </div>
              <div className="hover-genre">
                {title.genres.map((g) => <p>{g}</p>)}
              </div>
            </div>
            <div className="hover-div-r">
              <p>v</p>
            </div>
          </div>
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



