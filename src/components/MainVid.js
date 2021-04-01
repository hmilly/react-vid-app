import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player/lazy'

export default function MainVid({ data }) {
    const [genre, setGenre] = useState([])
    const [title, setTitle] = useState({})

    useEffect(() => {
        setGenre(data[Math.floor(Math.random() * data.length)])
    }, [data])

    useEffect(() => {
        if (genre) {
            const t = genre.reduce((prev, curr) =>
                (parseInt(prev.vote_count) > (curr.vote_count ? parseInt(curr.vote_count) : 1)) ? prev : curr, 1)
            setTitle(t)
        }
    }, [genre])

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