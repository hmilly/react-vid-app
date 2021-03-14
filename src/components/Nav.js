import React from 'react'
import {
    Link
} from "react-router-dom";

export default function Nav() {
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/series">Series</Link>
            <Link to="/films">Films</Link>
            <Link to="/popular">Popular</Link>
            <Link to="/mylist">My List</Link>
        </div>
    )
}
