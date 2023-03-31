import './index.css'

const GameOverCard = props => {
  const RESET_IMAGE_URL =
    'https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png'
  const {score, resetGame} = props

  const clickReset = () => {
    resetGame()
  }

  return (
    <div className="score-card">
      <div className="card">
        <div className="trophy-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
            alt="trophy"
            className="trophy"
          />
        </div>
        <h1 className="score-head">YOUR SCORE</h1>
        <p className="final-score">{score}</p>
        <div className="reset-btn-cont">
          <button type="button" className="btn" onClick={clickReset}>
            <img src={RESET_IMAGE_URL} alt="reset" className="reset-img" />
            PLAY AGAIN
          </button>
        </div>
      </div>
    </div>
  )
}

export default GameOverCard
