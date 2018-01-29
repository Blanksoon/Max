import { Component } from 'react'
import { styles } from './styles'

export default (props) => (
  <span>
    <button className="hamburger hamburger--slider" type="button">
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
    <style global jsx>
      {styles}
    </style>
  </span>
)