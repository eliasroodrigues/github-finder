import { useState, useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'

function UserSearch() {
  const [text, setText] = useState('')
  const { users, searchUsers, clearSearchUsers } = useContext(GithubContext)

  const handleChange = (event) => setText(event.target.value)

  const handleSubmit = (event) => {
    event.preventDefault()

    if (text === '') {
      alert('Please add text')
    } else {
      searchUsers(text)

      setText('')
    }
  }

  const handleClick = () => clearSearchUsers()

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
      <div className=''>
        <form onSubmit={ handleSubmit }>
          <div className='form-control'>
            <div className='relative'>
              <input
                type='text'
                className='w-full pr-40 bg-gray-200 input input-lg text-black'
                placeholder='Search'
                value={ text }
                onChange={ handleChange }
              />
              <button
                type='submit'
                className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>

      { users.length > 0 && (
        <div>
          <button
            className='btn btn-ghost btn-lg'
            onClick={ handleClick }
          >
            Clear
          </button>
        </div>
      )}
    </div>
  )
}

export default UserSearch