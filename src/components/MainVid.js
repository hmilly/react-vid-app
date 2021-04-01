import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player/lazy'

export default function MainVid({ data, path }) {
    const [title, setTitle] = useState({})

    useEffect(() => {
        const d = data
        const genre = d[Math.floor(Math.random() * d.length)]
        if (genre) {
            console.log("ran")
            const t = genre.reduce((prev, curr) =>
                (parseInt(prev.vote_count) > (curr.vote_count ? parseInt(curr.vote_count) : 1)) ? prev : curr, 1)
            setTitle(t)
        }
    }, [path])

    return (
        < div className="mainvid" >
            <ReactPlayer
                className="m-vid"
                url={`https://www.youtube.com/embed/${title.youtube_trailer_key}`}
                playing={false}
            />
        </div>
    )
}