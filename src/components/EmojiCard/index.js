import React from 'react'
import './index.css'

const EmojiCard = ({emojiDetails, onClickEmoji}) => {
  const {id, emojiName, emojiUrl} = emojiDetails

  const handleClick = () => {
    onClickEmoji(id)
  }

  return (
    <li className="emoji-card" onClick={handleClick}>
      <button>
        <img src={emojiUrl} alt={emojiName} className="emoji-image" />
      </button>
    </li>
  )
}

export default EmojiCard
