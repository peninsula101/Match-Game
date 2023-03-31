import './index.css'

const PhotoItem = props => {
  const {imageDetails, clickPhoto} = props
  const {id, thumbnailUrl} = imageDetails

  const onClickImg = () => {
    clickPhoto(id)
  }

  return (
    <li className="img-item">
      <button type="button" className="photo-btn">
        <img
          src={thumbnailUrl}
          alt="thumbnail"
          className="img"
          onClick={onClickImg}
        />
      </button>
    </li>
  )
}

export default PhotoItem
