import { createContext, useReducer } from 'react'

import githubReducer from './GithubReducer'

/*
 * A context file contains the states used on the application,
 * to modify the states we call the dispatch function with
 * the type and payload, if required.
 */

// create the github context
const GithubContext = createContext()

// defines its states
export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    isLoading: false,
  }

  // define the github reducer
  const [state, dispatch] = useReducer(githubReducer, initialState)

  // return its values,
  // we can pass all the states at once
  // with the spread operator ...state,
  // and all dispatch at once as well
  return <GithubContext.Provider value={{
    ...state,
    dispatch,
  }}>
    { children }
  </GithubContext.Provider>
}

export default GithubContext