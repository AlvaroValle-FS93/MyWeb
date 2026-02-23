import React from 'react'
import { Link } from 'react-router'
import './error.css';

export const ErrorPage = () => {
  return (
    <div className='error-component'>
      <h3>Oops! Page not found. The page you’re looking for doesn’t exist.</h3>
      <Link className='my-button' to='/'>Return home</Link>
    </div>
  )
}
