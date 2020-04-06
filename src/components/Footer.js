import React, { Component } from 'react'
import { Link } from 'gatsby'
import netlify from '../../content/images/whatsapp.png'
import gatsby from '../../content/thumbnails/gatsby.png'
import github from '../../content/images/telegram.svg'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer container">
        <div>
          <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">Built with Gatsby.js - Theme by Tania</a>
        </div>
        <div>
          <a href="https://t.me/mimin94" title="Chat via Telegram">
            <img
              src={telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-img"
              alt="telegram"
            />
          </a>
          <a href="https://api.whatsapp.com/send?phone=+6288279325589&text=Halo," title="Chat via WhatsApp">
            <img
              src={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-img"
              alt="whatsapp"
            />
          </a>
          <a href="https://www.gatsbyjs.org/" title="Built with Gatsby">
            <img
              src={gatsby}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-img"
              alt="GitHub"
            />
          </a>
        </div>
      </footer>
    )
  }
}
