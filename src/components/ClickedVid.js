import React, { useContext, useState, useEffect } from 'react';
import ReactPlayer from 'react-player/lazy'
import { store } from "../context"

export default function ClickedVid() {
    const { state, setTitle } = useContext(store)
    const title = state.selectedTitle
    return (
        <div className="title-details">
            <button className="title-btn" onClick={(e) => setTitle("close", e)}>x</button>
            <div className="title-vid">
                <ReactPlayer
                    width="100%"
                    height="100%"
                    url={`https://www.youtube.com/embed/${title.youtube_trailer_key}`}
                    alt={title.title}
                />
            </div>
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