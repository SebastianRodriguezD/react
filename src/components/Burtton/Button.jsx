import { useNavigate } from 'react-router-dom'
import './Button.css'

const Button = ({ text, onClick, type = 'button', path, className }) => {
  const navigate = useNavigate()

  const handleClick = (e) => {
    if (onClick) onClick(e)
    if (path) navigate(path)
  }

  return (
    <button
      className={`custom-button ${className}`}
      onClick={handleClick}
      type={type}
    >
      {text}
    </button>
  )
}

export default Button
