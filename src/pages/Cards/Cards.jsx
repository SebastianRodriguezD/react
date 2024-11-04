import { useState, useEffect } from 'react'
import './Cards.css'
import Loading from '../../components/Loading/Loading'
import TargetCard from '../../components/TargetCard/TargetCard'
import ButtonPagination from '../../components/ButtonsPagination/ButtonPagination'
import { Link } from 'react-router-dom'

const Cards = () => {
  const [cards, setCards] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const cardsPerPage = 16

  useEffect(() => {
    setLoading(true)
    fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php')
      .then((res) => res.json())
      .then((res) => {
        setCards(res.data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
        setLoading(false)
      })
  }, [])

  const indexOfLastCard = currentPage * cardsPerPage
  const indexOfFirstCard = indexOfLastCard - cardsPerPage
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard)

  const nextPage = () => {
    if (indexOfLastCard < cards.length)
      setCurrentPage((prevPage) => prevPage + 1)
  }

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage((prevPage) => prevPage - 1)
  }

  return (
    <main id='cards'>
      {loading && <Loading />}
      {currentCards.map((card) => (
        <Link key={card.id} to={`/card/${card.id}`}>
          <TargetCard card={card} />
        </Link>
      ))}
      <ButtonPagination
        currentPage={currentPage}
        nextPage={nextPage}
        prevPage={prevPage}
        disablePrev={currentPage === 1}
        disableNext={indexOfLastCard >= cards.length}
      />
    </main>
  )
}

export default Cards
