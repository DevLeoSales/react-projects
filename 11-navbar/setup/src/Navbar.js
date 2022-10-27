import userEvent from '@testing-library/user-event'
import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  // const [ishandleClicked, setIsMenuClicked] = useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)
  const menuClick = useRef(null)

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height
    console.log(linksContainerRef.current.getBoundingClientRect());

    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`
      menuClick.current.style.transform = "rotate(90deg)"
    } else {
      linksContainerRef.current.style.height = '0px'
      menuClick.current.style.transform = "rotate(0deg)"
    }
  }, [showLinks])
  const handleClick = (e) => {
    setShowLinks(!showLinks)
    console.log(e.target.value)
  }
  return <>
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className='nav-toggle' onClick={handleClick} ref={menuClick}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link
              return <li key={id}>
                <a href={url}>{text}</a>
              </li>
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon
            return <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          })}
        </ul>
      </div>
    </nav>
  </>
}

export default Navbar
