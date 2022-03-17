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
    isLoading: false,
  }

  // define the github reducer
  const [state, dispatch] = useReducer(githubReducer, initialState)

  // get search results
  const searchUsers = async (text) => {
    setIsLoading()

    const params = new URLSearchParams({
      q: text
    })

    const res = await fetch(`
      ${GITHUB_URL}/search/users?${ params }`,
      { headers: {
        Authorization: `token ${GITHUB_TOKEN}`
      } 
    })

    const { items } = await res.json()

    dispatch({
      type: 'GET_USERS',
      payload: items,
    })
  }

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

  // return its values
  return <GithubContext.Provider value={{
    users: state.users,
    isLoading: state.isLoading,
    searchUsers,
    clearSearchUsers,
  }}>
    { children }
  </GithubContext.Provider>
}

export default GithubContext