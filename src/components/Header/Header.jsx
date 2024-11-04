import { Link, NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header>
      <Link to='/home'>
        <img
          className='logo'
          src='https://www.yugioh-card.com/en/wp-content/uploads/2020/09/TCG_logo_500x500.png'
          alt='logo-yugioh'
        />
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink to='/home'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/cards'>Cards</NavLink>
          </li>
          <li>
            <NavLink to='/game'>Game</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
