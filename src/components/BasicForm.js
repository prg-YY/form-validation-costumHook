import useInput from "../hooks/use-input"

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: inputFirstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    InputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput((value) => value.trim() !== "")

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: inputLastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    InputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput((value) => value.trim() !== "")

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    InputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"))

  let formIsvalid = false

  if (
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredEmailIsValid
  ) {
    formIsvalid = true
  }

  const formChangeHandler = (e) => {
    e.preventDefault()

    if (!enteredFirstNameIsValid) {
      return
    }
    console.log(enteredFirstName)
    console.log(enteredLastName)
    console.log(enteredEmail)
    resetFirstNameInput()
    resetLastNameInput()
    resetEmailInput()
  }

  const firstNameInputClasses = inputFirstNameHasError
    ? "form-control invalid"
    : "form-control"
  const lastNameInputClasses = inputLastNameHasError
    ? "form-control invalid"
    : "form-control"
  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control"

  return (
    <form onSubmit={formChangeHandler}>
      {/* <div className={nameInputClasses}> */}
      <div className={firstNameInputClasses}>
        <label htmlFor="name">First Name</label>
        <input
          type="text"
          id="name"
          onChange={firstNameChangeHandler}
          onBlur={firstNameBlurHandler}
          value={enteredFirstName}
        />
        {inputFirstNameHasError && (
          <p className="error-text">Enter Your First Name Please...</p>
        )}
      </div>
      <div className={lastNameInputClasses}>
        <label htmlFor="name">Last Name</label>
        <input
          type="text"
          id="name"
          onChange={lastNameChangeHandler}
          onBlur={lastNameBlurHandler}
          value={enteredLastName}
        />
        {inputLastNameHasError && (
          <p className="error-text">Enter Your Last Name Please...</p>
        )}
      </div>
      {/* </div> */}
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text">Enter Your Email Please...</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsvalid}>Submit</button>
      </div>
    </form>
  )
}

export default BasicForm
