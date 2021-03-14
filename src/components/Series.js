import React from 'react'

export default function Series({series, EachSeries}) {
    return (
        <div className="series">
            {series.map(s => (
                <EachSeries key={s.netflixid} s={s} />
            ))}
        </div>

    )
}
