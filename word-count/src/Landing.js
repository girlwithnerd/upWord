import React, { Component } from 'react'
import './Landing.css'

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <div className='row'>
          <div className='col-md-7 left-landing'>
            <h1 className='landing-head landing-one'>Write Up</h1>
            <h3 className='landing-one'>Meet your writing goals by just writing</h3>
            <button type="button" className="btn btn-outline-light">Join Now</button>
          </div>

          <div className='col-md-5 right-landing'>
            <h1 className='landing-head'>Login</h1>
            <form>
              <input className='form-control' type="text" placeholder="Username" />
              <input className='form-control' type="text" placeholder="Password" />
            </form>
            <button type="button" className="btn btn-outline-dark">Log In</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;