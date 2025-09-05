import Header from './components/Header'
import Display from './components/Display'
import KeyPad from './components/KeyPad'
import { useState, useEffect, useReducer } from 'react'
import { ACTIONS } from './utils/actions'
import { evaluate } from './utils/actions'

const themeFromLocalStorage = localStorage.getItem('theme') || 1;


const reducer = (state, {type, payload}) => {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload,
          overwrite: false
        }
      }
      if (payload === '0' && state.currentOperand === '0') return state
      if (payload === '.' && state.currentOperand === '') return state
      if (payload === '.' && state.currentOperand.includes('.')) return state
      return {
        ...state,
        currentOperand: `${state.currentOperand || ''}${payload}`
      }
    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.previousOperand == null) return state
      if (state.currentOperand == null) {
        return {
          ...state,
          operation: payload
        }
      }
      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload,
          previousOperand: state.currentOperand,
          currentOperand: null
        }
      }
      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload,
        currentOperand: null
      }
    case ACTIONS.CLEAR:
      return {}
    case ACTIONS.DELETE_DIGIT:
      if (state.currentOperand == null) return state
      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1)
      }
    case ACTIONS.EVALUATE:
      if (state.currentOperand == null || state.previousOperand == null || state.operation == null) return state
      return {
        ...state,
        previousOperand: null,
        operation: null,
        currentOperand: evaluate(state)
      }
    default:
      return state
  }
}

const INTEGER_FORMATTER = new Intl.NumberFormat('en-us', { maximumFractionDigits: 0 })

const formatOperand = (operand) => {
  if (operand == null) return
  const [integer, decimal] = operand.toString().split('.')
  if (decimal == null) return INTEGER_FORMATTER.format(integer)
  return `${INTEGER_FORMATTER.format(integer)}.${decimal}`
} 

const App = () => {
  const [theme, setTheme] = useState(themeFromLocalStorage);
  const [{currentOperand, previousOperand, operation}, dispatch] = useReducer(reducer, {});

  const handleChange = (value) => {
    setTheme(value);
    localStorage.setItem('theme', value)
  };

  

  useEffect(() => {
    document.querySelector('body').setAttribute('data-theme', theme)
  }, [theme]);

  return (
    <div className="container">
      <Header currentTheme={theme} handleChange={handleChange}/>
      <Display currentOperand={formatOperand(currentOperand)} previousOperand={formatOperand(previousOperand)} operation={operation} />
      <KeyPad dispatch={dispatch} />
    </div>
  )
}

export default App