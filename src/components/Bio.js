import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.png'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Tent`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Welcome to Camp Perry - the world's number one back yard pretending to be a full-fledged youth camp.
        </p>
      </div>
    )
  }
}

export default Bio
