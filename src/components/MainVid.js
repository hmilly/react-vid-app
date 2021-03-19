import React, { useState, useEffect } from 'react'

export default function MainVid({ data }) {
    const [mostPopular, setMostPopular] = useState({})

    useEffect(() => {
        const getMostPopular = async () => {
            if (data) {
                const mostPopularFilm = await data.reduce((prev, curr) =>
                    prev.download > curr.download ? prev : curr, 1
                )
                setMostPopular(mostPopularFilm)
            }
        }
        getMostPopular()
    }, [data])

    return (
        < div className="mainvid" >
            <img src={mostPopular.largeimage} alt="film"></img>
        </div >
    )
}