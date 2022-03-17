import UserResults from '../components/users/UserResults'
import UserSearch from '../components/users/UserSearch'

/*
 * Home Page
 *
 * @return <div>
 */

function Home() {
  return (
    <>
      <UserSearch />
      <UserResults />
    </>
  )
}

export default Home
