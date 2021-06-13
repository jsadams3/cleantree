import React from 'react'

const Header = ({ avatarUrl, name, description }) => (
  <span className="repo-header">
    <img src={avatarUrl} className="repo-header-image"></img>
    <div>
      <h1 className="repo-header-title">{name}</h1>
      <h3 className="repo-header-description">{description}</h3>
    </div>
  </span>
)

export default Header
