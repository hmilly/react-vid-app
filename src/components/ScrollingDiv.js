import React, { useState, useEffect } from 'react'

export default function ScrollingDiv({ category, data, largeRow, set }) {
  const [items, setItems] = useState([])

  // const [itemDiv, setItemDiv] = useState()

  const clicked = (title) => {
    set(
      <div className="title-details">
        <button onClick={() => set("")} className="title-btn">x</button>
        <div className="title-img-div">
          <img src={title.largeimage ? title.largeimage : title.image} alt={title.title} className="titleImg"></img>
        </div>

        <h1 className="title-name">{title.title}</h1>

        <div className="title-details-div">
          <h4 className="title-h3">{title.rating}% match</h4>
          <h3 >{title.released}</h3>
          <h3 >{title.runtime}</h3>
        </div>

        <p className="title-synop">{title.synopsis}</p>
      </div>
    )
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
        <div className="title" onClick={(e) => { clicked(title) }}
        >
          <img src={title.image} alt={title.title} className={largeRow ? "largeImg" : "normalImg"}></img>
        </div>
      ))
  }

  return (
    <>

      <h1 className="category-name">{category}</h1>
      <div className="scrolling-div">
        {allItems}
      </div>


    </>
  )
}
