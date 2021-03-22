import React from 'react'
import ReactPlayer from 'react-player/lazy'

export default function ClickedVid({ title, set }) {
    return (
        <div className="title-details" key={title.imdb_id}>
            <button className="title-btn" onClick={() => set({})}>x</button>
            <ReactPlayer
                className="title-vid"
                url={`https://www.youtube.com/embed/${title.youtube_trailer_key}`}
                alt={title.title}
            />
            <h1 className="title-name">{title.title}</h1>

            <div className="title-info-div">
                <div className="title-info-left">
                    <div className="title-specifics">
                        <h2>{title.imdb_rating}% match</h2>
                        <h2 >{title.year}</h2>
                        <h2 className="rated">{title.rated}</h2>
                        <h2 >{title.runtime - 60 < 60 ? `1h ${title.runtime - 60}m` : `${title.runtime}m`}</h2>
                    </div>
                    <div className="title-synop">
                        <p>
                            Typically for each title, this is where the synopsis would go. For the API I have used, there is no
                            synopsis for titles. This waffle is here instead of any title info, appologies if you wanted
                            to know more about each film. Please redirect to wikipedia or to IMDB or youtube directly. Thanks
            </p>
                    </div>
                </div>
                <div className="title-info-right">
                    <div className="title-people-div">
                        <p className="info">Cast:</p>
                        <p>{title.stars?.map((n, i) => i !== title.stars.length - 1 ? `${n}, ` : `${n}.`)}</p>
                    </div>
                    <div className="title-people-div">
                        <p className="info">Director:</p>
                        <p>{title.directors?.map((n, i) => i !== title.directors.length - 1 ? `${n}, ` : `${n}.`)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
