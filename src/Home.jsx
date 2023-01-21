import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='p-2 bg-stone-600 text-white' >
            <h1 className='font-bold text-3xl'>Tailwind list</h1>
            <ol className='underline capitalize'>
                <Link to="utility"> <li> 01.utility</li></Link>
            </ol>
        </div>
    )
}

export default Home