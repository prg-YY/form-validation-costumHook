import useInput from "../hooks/use-input"

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    InputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
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

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsvalid = true
  }

  const formSubmissionHadler = (evet) => {
    evet.preventDefault()

    if (!enteredNameIsValid) {
      return
    }

    console.log(enteredName)
    console.log(enteredEmail)

    // nameInputRef.current.value = ""  not ideal,dont manipulate the DOM
    resetNameInput()

    resetEmailInput()
  }

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control"

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control"

  return (
    <form onSubmit={formSubmissionHadler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">Bir Nese Yezik Karimmm....</p>
        )}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text">Invalid Email Yezigg Karimmm....</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsvalid}>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput
