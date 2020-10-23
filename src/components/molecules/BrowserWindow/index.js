import React from 'react'
import './style.scss'

export const BrowserWindow = ({ children, link }) => (
  <div className="browser-window">
    <div className="container">
      <div className="row">
        <div className="column left">
          <span className="dot" style={{ background: '#ED594A' }} />
          <span className="dot" style={{ background: '#FDD800' }} />
          <span className="dot" style={{ background: '#5AC05A' }} />
        </div>
        <div className="column middle">
          <input type="text" value={link} disabled />
        </div>
      </div>

      <div className="content">{children}</div>
    </div>
  </div>
)
