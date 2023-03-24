const Notification = (props) => {
  const containerClassName = {`notification-container ${className}`}
  const {containerClassName, url,message}=props

  return (
    <div className={containerClassName}>
      <img className="icon" src={url} />
      <p className="message">{message}</p>
    </div>
  )
}
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <div className="container">
      <div className="card-container">
        <img
          className="icon"
          src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        />
        <p className="message">Information message</p>
      </div>
      <div class="card-container1">
        <img
          className="icon"
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        />
        <p className="message">Success message</p>
      </div>
      <div class="card-container2">
        <img
          className="icon"
          src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        />
        <p className="message">Warning message</p>
      </div>
      <div class="card-container3">
        <img
          className="icon"
          src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        />
        <p className="message">Error message</p>
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
