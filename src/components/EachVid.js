import React from 'react'

export default function EachVid({f}) {
    return (
        <div className="eachvid">

            <img src={f.image} alt={f.title}></img>

        </div>
    )
}
