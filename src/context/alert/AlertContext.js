import { createContext, useReducer } from 'react'

import alertReducer from './AlertReducer'

/*
 * The alert context contais the state and action
 * to show the alert message when there's nothing
 * on the search bar.
 */

const AlertContext = createContext()

// CREATE THE PROVIDER
export const AlertProvider = ({ children }) => {
  // the alert start with nothing
  const initialState = null

  const [state, dispatch] = useReducer(alertReducer, initialState)

  // SET ALERT
  const setAlert = (message, type) => {
    dispatch({
      type: 'SET_ALERT',
      payload: {
        message,
        type,
      }
    })

    // after 3 seconds the alert will be cleared up
    setTimeout(() => dispatch({ type: 'REMOVE_ALERT' }), 3000)
  }

  return <AlertContext.Provider value={{
    alert: state,
    setAlert,
  }}>
    { children }
  </AlertContext.Provider>
}

export default AlertContext