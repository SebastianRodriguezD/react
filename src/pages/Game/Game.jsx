import React, { useState, useEffect } from 'react'
import './Game.css'
import Loading from '../../components/Loading/Loading'

const Game = () => {
  const [cards, setCards] = useState([])
  const [flippedCards, setFlippedCards] = useState([])
  const [matchedCards, setMatchedCards] = useState([])
  const [loading, setLoading] = useState(false)
  const [victories, setVictories] = useState(0)
  const [gameWon, setGameWon] = useState(false)

  const loadCards = () => {
    setLoading(true)
    fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php')
      .then((res) => res.json())
      .then((res) => {
        const randomCards = res.data.sort(() => 0.5 - Math.random()).slice(0, 5)
        const duplicatedCards = [...randomCards, ...randomCards]
        setCards(duplicatedCards.sort(() => 0.5 - Math.random()))
        setFlippedCards([])
        setMatchedCards([])
        setGameWon(false)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
        setLoading(false)
      })
  }

  useEffect(() => {
    loadCards()
  }, [])

  const handleFlip = (index) => {
    if (
      flippedCards.length === 2 ||
      flippedCards.includes(index) ||
      matchedCards.includes(index)
    )
      return

    const newFlippedCards = [...flippedCards, index]
    setFlippedCards(newFlippedCards)

    if (newFlippedCards.length === 2) {
      const [first, second] = newFlippedCards
      if (cards[first].id === cards[second].id) {
        setMatchedCards((prev) => [...prev, first, second])
      }
      setTimeout(() => setFlippedCards([]), 1000)
    }
  }

  useEffect(() => {
    if (matchedCards.length === cards.length && cards.length > 0) {
      setGameWon(true)
      setVictories((prev) => prev + 1)
      setTimeout(loadCards, 2000)
    }
  }, [matchedCards])

  return (
    <div className='game'>
      {loading && <Loading />}
      <div className='victories-counter'>Victorias: {victories}</div>{' '}
      {/* Contador de victorias */}
      <div className='game-board'>
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card_game ${
              flippedCards.includes(index) || matchedCards.includes(index)
                ? 'flipped'
                : ''
            }`}
            onClick={() => handleFlip(index)}
          >
            {flippedCards.includes(index) || matchedCards.includes(index) ? (
              <img src={card.card_images[0].image_url} alt={card.name} />
            ) : (
              <div className='card-back' />
            )}
          </div>
        ))}
      </div>
      {gameWon && <div className='game-won-message'>¡Ganaste!</div>}{' '}
      {/* Mensaje de victoria */}
    </div>
  )
}

export default Game
