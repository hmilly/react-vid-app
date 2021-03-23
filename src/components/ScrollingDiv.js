import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player/lazy'

export default function ScrollingDiv({ genre, data, largeRow, set }) {
  const [items, setItems] = useState([])
  const [hoveredItem, setHoveredItem] = useState({})

  const hover = (e, title) => {
    if (e.target.className === "large-vid") {
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
      <p>${title.imdb_rating}% match</p>
      <p>${title.rated}</p>
      <p>${title.runtime - 60 < 60 ? `1h ${title.runtime - 60}m` : `${title.runtime}m`}</p>
    </div>
    <div class="hover-genre">
      ${title.genres.map(g => g !== "," ? `<p>${g}</p>` : null)}
    </div>
  </div>
  <div class="hover-div-r">
  <p>v</p>
  </div>
</div>`
    } else if (e.target.className === "normal-vid") {
      e.target.className += " n-hover-title"
    }
  }
  // const hover = (e) => {
  //   console.log(e.target)
  //   if (e.target.className === "large-vid") {
  //     e.target.className += " l-hover-title"
  //   } else if (e.target.className === "normal-vid") {
  //     e.target.className += " n-hover-title"
  //   }
  // }

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



