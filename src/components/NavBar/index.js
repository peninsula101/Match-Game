import './index.css'

const NavBar = props => {
  const {score, timeRemaining} = props
  return (
    <nav className="navbar-container">
      <div className="title-with-score-container">
        <div className="logo-and-title-container">
          <img
            className="match-logo"
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
          />
        </div>
        <ul className="score-timer-container">
          <li>
            <p className="score-display">
              Score: <span className="score">{score}</span>
            </p>
          </li>
          <li className="timer-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
              className="timer-logo"
            />
            <p className="countdown">{timeRemaining} Sec</p>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
