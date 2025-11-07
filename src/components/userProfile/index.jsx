import { useContext } from 'react'
import UserContext from '../../context/UserContext'

function UserProfile() {
  const { user, logoutUser } = useContext(UserContext)

  return (
    <div>
      <h1>Профиль пользователя</h1>
      <h3>{user.login}</h3>
      <h3>{user.email}</h3>
      <button onClick={logoutUser}>Выйти</button>
    </div>
  )
}
export default UserProfile
