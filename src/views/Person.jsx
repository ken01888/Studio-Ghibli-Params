import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

const Person = () => {
    const { personinfo } = useParams();
    const [person, setPerson] = useState(null);


    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`https://ghibliapi.herokuapp.com/people/${personinfo}`)
                const reply = await res.json()
                setPerson(reply)

            } catch (err) {
                alert(err)

            }

        })()
    }, [personinfo])

    return (
        <div className="container">

            <div className="row justify-content-center">
                <div className="card col-4 bg-light mt-5" key={`person-title-${person?.id}`}>
                    <div className="card-body ">
                        <div className="card-title bg-light text-center">{person?.name}</div>
                        <div className="card-subtitle mb-2 text-center">{person?.gender}</div>
                        <div className="card-subtitle mb-2 text-center">{person?.age}</div>
                        <div className="card-text">{person?.description}</div>
                        <div className='text-center'><a href={`${person?.url}`} style={{textDecoration:'none'}} className='btn bg-dark text-white'>Person Api Info</a></div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Person;