import React from 'react'

export default function Videos({films, EachVid}) {
    return (
        <div className="films">
        {films.map(f => (
          <EachVid key={f.netflixid} f={f} />
        ))}
      </div>
    )
}
