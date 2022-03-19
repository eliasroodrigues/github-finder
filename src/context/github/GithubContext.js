import { createContext, useReducer } from 'react'

import githubReducer from './GithubReducer'

// create the github context
const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

// defines its functionalities
export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    isLoading: false,
  }

  // define the github reducer
  const [state, dispatch] = useReducer(githubReducer, initialState)

  // clear search results
  const clearSearchUsers = () => {
    dispatch({
      type: 'CLEAR_USERS',
    })
  }

  // set loadin
  const setIsLoading = () => {
    dispatch({
      type: 'SET_ISLOADING',
    })
  }

  // return its values,
  // we can pass all the states at once
  // with the spread operator ...state,
  // and all dispatch at once as well
  return <GithubContext.Provider value={{
    ...state,
    dispatch,
    clearSearchUsers,
  }}>
    { children }
  </GithubContext.Provider>
}

export default GithubContext