import { useParams } from 'react-router-dom'
import './Card.css'
import { useEffect, useState } from 'react'
import Loading from '../../components/Loading/Loading'

const Card = () => {
  const { id } = useParams()
  const [card, setCard] = useState(null)

  useEffect(() => {
    fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.data && res.data.length > 0) {
          setCard(res.data[0])
        }
      })
      .catch((error) => console.error('Error fetching card data:', error))
  }, [id])

  if (!card) {
    return <Loading />
  }

  return (
    <div className='card'>
      <h2>{card.name}</h2>
      <div className='div_img_card'>
        <img
          className='img_card'
          src={card.card_images[0].image_url}
          alt={card.name}
        />
      </div>
      <p className='p_card'>{card.desc}</p>
    </div>
  )
}

export default Card
