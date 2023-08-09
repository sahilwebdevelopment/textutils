import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  //bg-body-tertiary
  //style={{color: props.mode==="dark"? "black":"white"}}
  return (
    <>
    <nav className={`navbar navbar-expand-lg ${props.mode==="light"? "black":"bg-body-tertiary"}`}>
  <div className="container-fluid">
    <a className={`navbar-brand ${props.mode==="dark"? "text-black":"text-white"}`} href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex me-2">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/" style={{color: props.mode==="dark"? "black":"white"}}>Home</a>
        </li>
        <li className="nav-item" >
          <a className="nav-link" href="/" style={{color: props.mode==="dark"? "black":"white"}}>About</a>
        </li>
      </ul>
      <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
    </div>
</div>
  </div>
</nav>
    </>
  )
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
}

Navbar.defaultProps = {
    title: 'TextUtils',
}