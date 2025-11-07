import { useContext } from 'react'
import UserContext from '../../context/UserContext'
import RegistrationForm from '../registrationForm'
import UserProfile from '../userProfile'

function MainComponent() {
  const { isRegistered } = useContext(UserContext)

  return <>{isRegistered ? <UserProfile /> : <RegistrationForm />}</>
}
export default MainComponent
