import React from 'react'
import './Home.css'
import homeLogo from '../../assets/img/blogs.avif'

const Home = () => {
  return (

    <>
    <h1 className='titulo'>Home</h1>

    <img src= {homeLogo} className = 'img' alt="Um dia no escritório" />

    </>
    
  
    )
}


  export default Home