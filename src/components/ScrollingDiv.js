import React, { useState, useEffect } from 'react'

export default function ScrollingDiv({ category, data, largeRow }) {
  const [items, setItems] = useState([])
  const [itemHover, setItemHover] = useState()
  // const [itemDiv, setItemDiv] = useState()


  const onHover = (e, title) => {
    console.log(title)
    setItemHover(
      <div className="title-details">
        <p>{title.title}</p>
        <p>{title.synopsis}</p>
        <p>{title.rating}</p>
        <p>{title.runtime}</p>
      </div>
    )
  }

  useEffect(() => {

    const getItems = async () => {
      if (data) {
        const eachItem = await data.map((title) => (
          <div className="title" onMouseOver={(e) => { onHover(e, title) }}
            onMouseOut={(e) => { setItemHover("") }}>
            <img src={title.image} alt={title.title} className={largeRow ? "largeImg" : "normalImg"}></img>
          </div>
        ))
        setItems(eachItem)
      }
    }
    getItems()
  }, [data, itemHover, largeRow])




  return (
    <>
      <h1 className="category-name">{category}</h1>
      <div className="scrolling-div">
        {items}

      </div>
      {itemHover}

    </>
  )
}
