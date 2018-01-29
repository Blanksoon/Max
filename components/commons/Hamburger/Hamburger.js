import { Component } from 'react'
import cx from 'classnames'
import customStyle from './custom.scss'

export default (props) => {
  const styles = cx({
    'hamburger': true,
    'hamburger--slider': true,
    'is-active': props.active
  })
  return (
    <span>
      <style dangerouslySetInnerHTML={{ __html: customStyle }} />
      <div className={styles} onClick={props.toggleHamburger}>
        <div className="hamburger-box">
          <div className="hamburger-inner"></div>
        </div>
      </div>
    </span>
  )
}