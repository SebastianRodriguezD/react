import './TargetCard.css'

const TargetCard = ({ card }) => {
  return (
    <div className='target-cards' key={card.id}>
      <div className='name_card'>
        <h2>{card.name}</h2>
      </div>

      <div className='img_cards'>
        <img src={card.card_images[0].image_url} alt={card.name} />
      </div>
    </div>
  )
}

export default TargetCard
