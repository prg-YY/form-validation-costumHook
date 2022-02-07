import { useState } from "react"

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("")
  const [inTouched, setIsTouched] = useState(false)

  const valueIsValid = validateValue(enteredValue)
  const hasError = !valueIsValid && inTouched

  const valueChangeHandler = (evet) => {
    setEnteredValue(evet.target.value)
  }

  const InputBlurHandler = (evet) => {
    setIsTouched(true)
  }

  const reset = () => {
    setEnteredValue("")
    setIsTouched(false)
  }

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    InputBlurHandler,
    reset,
  }
}

export default useInput
