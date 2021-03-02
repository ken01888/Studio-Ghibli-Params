import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Films = () => {
    const [films, setFilms] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch('https://ghibliapi.herokuapp.com/films')
                const reply = await res.json()
                setFilms(reply)

            } catch (err) {
                alert(err)
            }

        })()
    }, [])

    return (
        <ul className="list-group">

            {films.map(val => (
                <li className="list-group-item d-flex justify-content-between align-items-center" key={`films-${val.id}`}>
                    {val.title}
                    <Link to={`/films/${val.id}`} className='btn bg-dark text-white'>{val.title} - {val.release_date}</Link>
                </li>
            ))}
        </ul>



    )


}

export default Films;