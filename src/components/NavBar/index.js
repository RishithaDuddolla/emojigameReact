import React from 'react'
import './index.css'

const NavBar = ({score, topScore, isGameOver, isWon}) => (
  <nav className="nav-bar">
    <div className="nav-content">
      <img
        src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        alt="emoji logo"
        className="emoji-logo"
      />
      <h1 className="nav-heading">Emoji Game</h1>
    </div>
    {!isGameOver && !isWon && (
      <div className="scores">
        <p className="score">Score: {score}</p>
        <p className="top-score">Top Score: {topScore}</p>
      </div>
    )}
  </nav>
)

export default NavBar
