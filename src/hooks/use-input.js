import { useReducer } from "react"

const initialInputState = {
  value: "",
  isTouched: false,
}

const inpiutStateReduser = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched }
  }
  if (action.type === "BLUR") {
    return { isTouched: true, value: state.value }
  }
  if (action.type === "RESET") {
    return { isTouched: false, value: "" }
  }
  return inpiutStateReduser
}

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inpiutStateReduser,
    initialInputState
  )

  const valueIsValid = validateValue(inputState.value)
  const hasError = !valueIsValid && inputState.isTouched

  const valueChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value })
  }

  const InputBlurHandler = (event) => {
    dispatch({ type: "BLUR" })
  }

  const reset = () => {
    dispatch({ type: "RESET" })
  }

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    InputBlurHandler,
    reset,
  }
}

export default useInput
