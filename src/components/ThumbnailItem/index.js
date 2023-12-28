// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imagesList, onDisplayGallery, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = imagesList

  const onClickThumbnail = () => {
    onDisplayGallery(id)
  }

  const activeImageClassName = isActive ? 'active' : 'inactive'

  return (
    <div>
      <li>
        <button type="button">
          <img
            src={thumbnailUrl}
            alt={thumbnailAltText}
            className={activeImageClassName}
            onClick={onClickThumbnail}
          />
        </button>
      </li>
    </div>
  )
}
export default ThumbnailItem
