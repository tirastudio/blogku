import React, { Component } from 'react'
import tania from '../../content/images/profile.jpg'
import wasap from '../../content/thumbnails/wasap.png'
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
                Hola, Saya seorang Freelancer harian lepas yang masih amatiran, pengen jadi profesional tapi masih kurang ilmu dan portofolio.{' '}
                <strong>
                  nah bagi yang mau bikin website langsung kontak aja kita diskusikan biar nambah portofolio saya 😎.
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
                  href="https://api.whatsapp.com/send?phone=+6288279325589&text=Halo,"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={wasap} height="50" width="50" alt="Patreon" /> Chat WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </aside>
    )
  }
}
