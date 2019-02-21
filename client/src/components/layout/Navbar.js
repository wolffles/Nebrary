import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">Netbrary</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/tv"> browse</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

Navbar.propTypes = {

}

const mapStateToProps = (state) => ({
  
})

export default connect(mapStateToProps)(Navbar);