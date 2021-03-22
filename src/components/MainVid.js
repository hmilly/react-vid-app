import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player/lazy'

export default function MainVid({ data }) {
    const [mostPopular, setMostPopular] = useState({})

    useEffect(() => {
        const getMostPopular = async () => {
            let mostPop = Object.entries(data).map(([key, value]) => {
                return value.reduce((prev, curr) =>
                    (parseInt(prev.vote_count) > parseInt(curr.vote_count)) ? prev : curr, 1
                )
            }).reduce((prev, curr) =>
                (parseInt(prev.vote_count) > parseInt(curr.vote_count)) ? prev : curr, 1
            )
            setMostPopular(mostPop)
        }
        getMostPopular()
    }, [data])

    return (
        < div className="mainvid" >
            <ReactPlayer
                className="vid"
                url={`https://www.youtube.com/embed/${mostPopular.youtube_trailer_key}`}

            />
        </div>
    )
}

