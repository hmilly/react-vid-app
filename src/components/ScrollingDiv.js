import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'

export default function ScrollingDiv({ genre, data, largeRow, set }) {
  const [items, setItems] = useState([])
  const [hoveredItem, setHoveredItem] = useState()

  const hover = (e) => {
    console.log("in", e)
    if (e.target.className.includes("vidItem") && !hoveredItem) {
      setHoveredItem(true)
      e.target.className = e.target.className.replace("vidItem", "hover-vid")
      e.target.lastChild.className = "hover"
    }
  }

  const hoverOut = (e) => {
    console.log("out", e)
    if (e.target.className.includes("hover-vid") && hoveredItem) {
      setHoveredItem(false)
      e.target.className = e.target.className.replace("hover-vid", "vidItem")
      e.target.lastChild.className = "hover hidden"
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
          className={largeRow ? "l-vid vidItem" : "n-vid vidItem"}
          // onClick={() => { set(title) }}
          onMouseEnter={(e) => hover(e)}
          onMouseLeave={(e) => hoverOut(e)}
        >
          <ReactPlayer
            width="100%"
            height="100%"
            light={true}
            url={`https://www.youtube.com/embed/${title.youtube_trailer_key}`}
          />
          <div className="hover hidden">
            <div className="hover-div-l">
              <div className="hover-details">
                <p>▶️</p>
                <p>➕</p>
                <p>👍</p>
                <p>👎</p>
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



