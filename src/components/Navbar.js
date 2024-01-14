import React from 'react'
import {Link} from 'react-router-dom'




export default function Navbar() {
  return (
     <>
    <nav className="topnav navbar-expand-lg navbar-dark bg-dark">
      <div className="navdiv">
         <ul>
          <li className="logo">NCC</li>
         <li><Link to="/">Home</Link></li>
          <li><a href="/">Our aim</a></li>
          <li><a href="/">Activities</a></li>
          <li><a href="/"></a></li>
          
          <li> <Link to="/Register">New Registration</Link></li>
    </ul>

    </div>
    </nav>
    
    
    </>

  )
}
// Navbar.propTypes = {
//   title: PropTypes.string.isRequired
// }
// Navbar.defaultProps={
//   title:'Set title here'
// };

