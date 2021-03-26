import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player/lazy'

export default function MainVid({ data }) {
    const [mostPopular, setMostPopular] = useState({})

    useEffect(() => {
        const getMostPopular = async () => {
            let title = data[Math.floor(Math.random() * data.length)].reduce((prev, curr) =>
                (parseInt(prev.vote_count) > parseInt(curr.vote_count)) ? prev : curr, 1
            )

            setMostPopular(title)
        }
        getMostPopular()
    }, [data])

    return (
        < div className="mainvid" >
            <ReactPlayer
                className="m-vid"
                url={`https://www.youtube.com/embed/${mostPopular.youtube_trailer_key}`}
                playing={false}
            />
        </div>
    )
}

