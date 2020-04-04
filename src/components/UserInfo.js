import React, { Component } from 'react'
import tania from '../../content/images/profile.jpg'
import patreon from '../../content/thumbnails/patreon.png'
import kofi from '../../content/thumbnails/kofi.png'

export default class UserInfo extends Component {
  render() {
    return (
      <aside className="note">
        <div className="container note-container">
          <div className="flex-author">
            <div className="flex-avatar">
              <img className="avatar" src={tania} alt="Agus Setiyo Budi" />
            </div>
            <div>
              <p>
                Hola, belajar nulis di blog biar gak kelupaan apalagi dikit dikit lupa.{' '}
                <strong>
                  Blog tanpa adsense cuman berisi tutorial dan dokumentasi sedikit.
                </strong>
              </p>

              <div className="flex">
                <a
                  href="#"
                  className="donate-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={kofi} className="coffee-icon" alt="Coffee icon" />
                  Buy me a coffee
                </a>
                <a
                  className="patreon-button"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={patreon} height="50" width="50" alt="Patreon" /> Become a Patron
                </a>
              </div>
            </div>
          </div>
        </div>
      </aside>
    )
  }
}
