import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaAngleLeft } from "react-icons/fa";
import "./galery.css"

const Undifined = () => {
  return (
    <div>
      <div className="wraper__photo">
        <div className="notFound">
          <div className="notFountItem">
          <h2 className='galery__title'>Page Not Found</h2>
          <p className='galery-text'>Looks like you've followed a broken link or entered a URL that doesn't exist on this site.</p>
          <NavLink to='/Gapley'>Back to our site</NavLink>
          <hr />
          If this is your site, and you weren't expecting a 404 for this path, please visit Netlify's
          <NavLink to='/https://github.com/nurmukhamedov/js-25-basics'>page not found" support guide </NavLink>
          for troubleshooting tips.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Undifined
