import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    isFirstEmpty: false,
    isLastEmpty: false,
    isSubmitted: false,
  }

  onChangeFirstName = event => {
    this.setState({
      firstname: event.target.value,
    })
  }

  onChangeLastName = event => {
    this.setState({
      lastname: event.target.value,
    })
  }

  submitForm = event => {
    event.preventDefault()
    const {firstname, lastname} = this.state
    const isFirstValid = firstname === ''
    const isLastValid = lastname === ''

    if (isFirstValid && isLastValid) {
      this.setState({
        isFirstEmpty: isFirstValid,
        isLastEmpty: isLastValid,
      })
    } else if (isFirstValid) {
      this.setState({
        isFirstEmpty: isFirstValid,
      })
    } else if (isLastValid) {
      this.setState({
        isLastEmpty: isLastValid,
      })
    } else {
      this.setState({
        isSubmitted: true,
        firstname: '',
        lastname: '',
      })
    }
  }

  onBlurFirstName = () => {
    const {firstname} = this.state
    const isValidFirstName = firstname === ''
    this.setState({
      isFirstEmpty: isValidFirstName,
    })
  }

  onAnotherResponse = () => {
    this.setState({
      isSubmitted: false,
      isFirstEmpty: false,
      isLastEmpty: false,
    })
  }

  onBlurLastName = () => {
    const {lastname} = this.state
    const isValidLastName = lastname === ''
    this.setState({
      isLastEmpty: isValidLastName,
    })
  }

  render() {
    const {
      firstname,
      lastname,
      isFirstEmpty,
      isLastEmpty,
      isSubmitted,
    } = this.state
    console.log(isFirstEmpty, isLastEmpty)
    return (
      <div className="registration-form-container">
        <h1 className="heading">Registration Form</h1>
        {!isSubmitted ? (
          <form className="form-container" onSubmit={this.submitForm}>
            <label htmlFor="firstname">FIRST NAME</label>
            <input
              id="firstname"
              value={firstname}
              onChange={this.onChangeFirstName}
              onBlur={this.onBlurFirstName}
              placeholder="FIRST NAME"
            />
            {isFirstEmpty && <p>Required</p>}
            <label htmlFor="lastname">LAST NAME</label>
            <input
              id="lastname"
              value={lastname}
              onChange={this.onChangeLastName}
              onBlur={this.onBlurLastName}
              placeholder="LAST NAME"
            />
            {isLastEmpty && <p>Required</p>}
            <button type="submit" className="button">
              Submit
            </button>
          </form>
        ) : (
          <div className="form-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
            />
            <p>Submitted Successfully</p>
            <button type="button" onClick={this.onAnotherResponse}>
              Submit Another Response
            </button>
          </div>
        )}
      </div>
    )
  }
}
export default RegistrationForm
