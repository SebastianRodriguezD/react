import Button from '../../components/Burtton/Button'
import './Home.css'

const Home = () => {
  return (
    <div className='home-container'>
      <h1 className='h1_home'>Welcome, Duelists!</h1>
      <p className='p_home'>It's Time to Duel!</p>

      <div className='div_banner'>
        <h2 className='h2_banner'>Products</h2>
        <p className='p_banner'>Discover the latest cards</p>

        <div className='div_button_hero'>
          <Button className='button_cards' text='Explore Cards' path='/cards' />
          <Button className='button_game' text='Game' path='/game' />
        </div>
      </div>
    </div>
  )
}

export default Home
