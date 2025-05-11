import './index.css'

const registrationStatusConstants = {
 
  YET_TO_REGISTER: 'YET_TO_REGISTER',
  REGISTERED: 'REGISTERED',
  REGISTRATIONS_CLOSED: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {activeEventRegistrationStatus} = props

  const renderNoActiveEvent = () => (
    <p className="no-active-event">
      Click on an event to view its registration details
    </p>
  )

  const renderYetToRegisterView = () => (
    <div className="yet-to-register-section">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register"
      />
      <p className="yet-to-register-description">
        Live performance brings so much to your relationship with dance. Seeing
        dance live can often make you fall totally in love with this beautiful
        art form.
      </p>
      <button className="register-button" type="button">
        Register Here
      </button>
    </div>
  )

  const renderRegisteredView = () => (
    <div className="registered-section">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-img"
      />
      <h1 className="registered-event-description">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderRegistrationsClosedView = () => (
    <div className="registrations-closed">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registration-closed-img"
      />
      <h1 className="registration-closed-heading">
        Registrations Are Closed Now!
      </h1>
      <p className="registration-closed-description">
        Stay tuned. We will reopen the registrations soon.
      </p>
    </div>
  )

  const renderActiveRegistrationEvent = () => {
    switch (activeEventRegistrationStatus) {
      case registrationStatusConstants.YET_TO_REGISTER:
        return renderYetToRegisterView()
      case registrationStatusConstants.REGISTERED:
        return renderRegisteredView()
      case registrationStatusConstants.REGISTRATIONS_CLOSED:
        return renderRegistrationsClosedView()
      default:
        return renderNoActiveEvent()
    }
  }

  return (
    <div className="active-registration-section">
      {renderActiveRegistrationEvent()}
    </div>
  )
}

export default ActiveEventRegistrationDetails
