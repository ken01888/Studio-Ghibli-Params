import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const People = () => {
    const [people, setPeople] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch('https://ghibliapi.herokuapp.com/people')
                const reply = await res.json()
                setPeople(reply)

            } catch (err) {
                alert(err)

            }

        })()
    }, [])

    return (
        <ul className="list-group">

            {people.map(val => (
                <li className="list-group-item d-flex justify-content-between align-items-center" key={`people-${val.id}`}>
                    {val.name}
                    <Link to={`/people/${val.id}`} className='btn bg-dark text-white'> Info - {val.name}</Link>
                </li>
            ))}
        </ul>



    )


}

export default People;