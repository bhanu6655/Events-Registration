import './index.css'

const EventItem = props => {
  const {event, setActiveEventId, isActive} = props
  const {id, imageUrl, name, location} = event
  const imageClassName = isActive ? 'active-image not-active' : 'not-active'

  const onClickEvent = () => {
    setActiveEventId(id)
  }

  return (
    <li className="event-list-item" key={event.id}>
      <button className="event-button" onClick={onClickEvent} type="button">
        <img src={imageUrl} className={imageClassName} alt="event" />
        <p className="event-name">{name}</p>
        <p className="location">{location}</p>
      </button>
    </li>
  )
}

export default EventItem
