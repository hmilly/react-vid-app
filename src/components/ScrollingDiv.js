import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'

export default function ScrollingDiv({ genre, data, largeRow, set, setul }) {
  const [items, setItems] = useState([])
  const [clicked, setClicked] = useState(false)

  const settitle = (e, title) => {
    setul(title)
    setClicked(!clicked)
  }

  const hover = (e) => {
    if (e.target.className.includes("vidItem")) {
      e.target.className = e.target.className.replace("vidItem", "hover-vid")
      e.target.lastChild.className = "hover"
    }
  }
  const hoverOut = (e) => {
    if (e.target.className.includes("hover-vid")) {
      e.target.className = e.target.className.replace("hover-vid", "vidItem")
      e.target.lastChild.className = "hover hidden"
    }
  }

  const scrollLeft = (e) => {
    e.target.parentElement.scrollLeft += 1000
  }
  const scrollRight = (e) => {
    e.target.parentElement.scrollLeft -= 1000
  }

  useEffect(() => {
    const getAllItems = async () =>
      await setItems(data)
    getAllItems()
  }, [data])

  let allItems = <div className="galleryMessage">You haven't added any titles to your list yet.</div>
  if (items && items.length !== 0) {
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
                <p onClick={(e) => settitle(e, title)}>{clicked ? "✔️" : "➕"}</p>
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
      <h1 className="category-name">{genre === "mylist" ? "My List" : genre}</h1>
      <div className={genre !== "mylist" ? "scrolling-div" : "mylist"}>
        {allItems}
        <button className="arrow ar" onClick={(e) => scrollRight(e)}>⪡</button>
        <button className="arrow al" onClick={(e) => scrollLeft(e)}>⪢</button>
      </div>
    </>
  )
}



