import React from 'react'
import './index.css'

const WinOrLoseCard = ({isWon, score, onClickPlayAgain}) => {
  const imageUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="win-or-lose-card">
      <img src={imageUrl} alt="win or lose" className="result-image" />
      <div className="result-details">
        <h1 className="result-status">{gameStatus}</h1>
        <p className="result-score">
          {scoreLabel}: {score}/12
        </p>
        <button className="play-again-btn" onClick={onClickPlayAgain}>
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseCard
