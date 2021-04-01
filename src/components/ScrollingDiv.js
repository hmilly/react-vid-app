import React, { useContext, useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import { store } from "../context"

export default function ScrollingDiv({ genre, data, largeRow }) {
  const { state, setTitle, setUserList } = useContext(store)
  const [items, setItems] = useState([])

  useEffect(() => {
    const getAllItems = async () =>
      data ? await setItems(data) : setItems(state.userList)
    getAllItems()
  }, [data, state.userList])

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
  const setGreen = (e) => console.log(e)
  const setRed = (e) => e.target.className.color = "red"
  const scrollLeft = (e) => e.target.parentElement.scrollLeft += 1000
  const scrollRight = (e) => e.target.parentElement.scrollLeft -= 1000

  let allItems = <div className="galleryMessage">You haven't added any titles to your list yet.</div>
  if (items && items.length !== 0) {
    allItems =
      items.map((title, i) => (
        <div key={title.imdb_id}
          className={largeRow ? "l-vid vidItem" : "n-vid vidItem"}

          onMouseEnter={(e) => hover(e)}
          onMouseLeave={(e) => hoverOut(e)}
        >
          <ReactPlayer
            onClick={() => { setTitle(title) }}
            width="100%"
            height="100%"
            light={true}
            url={`https://www.youtube.com/embed/${title.youtube_trailer_key}`}
          />
          <div className="hover hidden">
            <div className="hover-div-l">
              <div className="hover-details">
                <p>▶️</p>
                <p onClick={(e) => setUserList(title, e)}>➕</p>
                <p onClick={(e) => setGreen(e)}>👍</p>
                <p onClick={(e) => setRed(e)}>👎</p>
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
      <h1 className={genre === "Popular" ? "popular category-name" : "category-name"}>
        {genre === "mylist" ? "My List" : genre}
      </h1>
      <div className={genre !== "mylist" ? "scrolling-div" : "mylist"}>
        {allItems}
        <button className="arrow ar" onClick={(e) => scrollRight(e)}>⪡</button>
        <button className="arrow al" onClick={(e) => scrollLeft(e)}>⪢</button>
      </div>
    </>
  )
}