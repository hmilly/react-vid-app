import React, { useState, useEffect } from 'react'

export default function ScrollingDiv({ category, data }) {
  const [items, setItems] = useState([])

  useEffect(() => {
    const getItems = async () => {
      await setItems(data)
    }
    getItems()
  }, [data])

  return (
    <>
    <h1 className="category-name">{category}</h1>
    <div className="scrolling-div">
      {items.map(title => (
        <div className="title">
          <img src={title.image} alt={title.title}></img>
        </div>
      ))}
    </div>
    </>
  )
}
