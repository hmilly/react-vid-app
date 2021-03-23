import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player/lazy'

export default function ScrollingDiv({ genre, data, largeRow, set }) {
  const [items, setItems] = useState([])
  const [hoveredItem, setHoveredItem] = useState({})

  const hover = (e, title) => {
    if (e.target.className === "large-vid") {
      let runTime = title.runtime - 60 < 60 ? `1h ${title.runtime - 60}m` : `${title.runtime}m`
      let genre = title.genres.map(g => `<p>${g}</p>`).join('')
      e.target.className = "small-vid"
      e.target.innerHTML += `
<div class="hover">
  <div class="hover-div-l">
    <div class="hover-details">
      <p>P</p>
      <p>L</p>
      <p>U</p>
      <p>D</p>
    </div>
    <div class="hover-rating">
      <p >${title.imdb_rating}% match</p>
      <p>${title.rated}</p>
      <p>${runTime}</p>
    </div>
    <div class="hover-genre">
      ${genre}
    </div>
  </div>
  <div class="hover-div-r">
  <p>v</p>
  </div>
</div>`
    }
  }

  const hoverOut = (e) => {
    if (e.target.className.includes("l-hover-title")) {
      e.target.className = "large-vid"
    } else if (e.target.className.includes("n-hover-title")) {
      e.target.className = "normal-vid"
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
          className="title"
          // onClick={() => { set(title) }}
          onMouseOver={(e) => hover(e, title)}
          onMouseLeave={(e) => hoverOut(e)}
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



