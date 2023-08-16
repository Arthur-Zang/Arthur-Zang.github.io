import React from 'react'
import './Contact.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  return (
    <div className="contact">
      CONTACT
      <ul>
          <li>
              <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/arthur-zang-839316233/">
                  <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                  ///CONTACT ME ON LINKEDIN
              </a>
          </li>
          <li>
              <a target="_blank" rel='noreferrer' href="https://github.com/Arthur-Zang">
                  <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                  ///MY GITHUB
              </a>
          </li>   
      </ul>
    </div>
  )
}

export default Contact