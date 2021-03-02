import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

const FilmInfo = () => {
    const [film, setFilm] = useState(null);
    const { filminfo } = useParams();


    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`https://ghibliapi.herokuapp.com/films/${filminfo}`)
                const reply = await res.json()
                setFilm(reply)

            } catch (err) {
                alert(err)

            }

        })()
    }, [filminfo])

    return (
        <div className="container">

            <div className="row justify-content-center">
                <div className="card col-4 bg-light mt-5" key={`film-title-${film?.id}`}>
                    <div className="card-body ">
                        <div className="card-title bg-light">{film?.title}</div>
                        <div className="card-subtitle mb-2 text-muted">{film?.director}</div>
                        <div className="card-subtitle mb-2 text-muted">{film?.release_date}</div>
                        <div className="card-text">{film?.description}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilmInfo;