import React, {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    clickedEmojis: [],
    score: 0,
    topScore: 0,
    isGameOver: false,
    isWon: false,
  }

  shuffleEmojis = emojisList => emojisList.sort(() => Math.random() - 0.5)

  handleEmojiClick = id => {
    const {clickedEmojis, score, topScore} = this.state
    if (clickedEmojis.includes(id)) {
      this.setState({isGameOver: true, isWon: false})
    } else {
      const newClickedEmojis = [...clickedEmojis, id]
      const newScore = score + 1
      const newTopScore = newScore > topScore ? newScore : topScore

      if (newScore === this.props.emojisList.length) {
        this.setState({isGameOver: true, isWon: true,
        score: 12,
        topScore: 12})
      } else {
        this.setState({
          clickedEmojis: newClickedEmojis,
          score: newScore,
          topScore: newTopScore,
        })
      }
    }
  }

  resetGame = () => {
    this.setState(prevState => {
      const {score, topScore} = prevState
      const newTopScore = score > topScore ? score : topScore
      return {
        clickedEmojis: [],
        score: 0,
        topScore: newTopScore,
        isGameOver: false,
        isWon: false,
      }
    })
  }

  render() {
    const {emojisList} = this.props
    const {score, topScore, isGameOver, isWon} = this.state
    const shuffledEmojis = this.shuffleEmojis(emojisList)

    return (
      <div className="emoji-game">
        <NavBar
          score={score}
          topScore={topScore}
          isGameOver={isGameOver}
          isWon={isWon}
        />
        {isGameOver ? (
          <WinOrLoseCard
            isWon={isWon}
            score={score}
            onClickPlayAgain={this.resetGame}
          />
        ) : (
          <ul className="emojis-list">
            {shuffledEmojis.map(emoji => (
              <EmojiCard
                key={emoji.id}
                emojiDetails={emoji}
                onClickEmoji={this.handleEmojiClick}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default EmojiGame
