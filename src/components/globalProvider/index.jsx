import { useState } from 'react'
import UserContext from '../../context/UserContext'

function GlobalProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isRegistered, setIsRegistered] = useState(false)

  const loginUser = (data) => {
    setUser(data)
    setIsRegistered(true)
  }

  const logoutUser = () => {
    setUser(null)
    setIsRegistered(false)
  }
  return (
    <UserContext.Provider value={{ user, loginUser, isRegistered, logoutUser }}>
      {children}
    </UserContext.Provider>
  )
}
export default GlobalProvider
