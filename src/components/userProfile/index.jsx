import { useContext } from 'react'
import UserContext from '../../context/UserContext'
import styles from './styles.module.css'

function UserProfile() {
  const { user, logoutUser } = useContext(UserContext)

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Профиль пользователя</h2>
      <p>Логин: {user.login}</p>
      <p>Email: {user.email}</p>
      <button className={styles.btn} onClick={logoutUser}>
        Выйти
      </button>
    </div>
  )
}
export default UserProfile
