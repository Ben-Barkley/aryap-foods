import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>home page

        <h1>here</h1>

        <Link to='/product'>
        click here
        </Link>
    </div>
  )
}

export default Home