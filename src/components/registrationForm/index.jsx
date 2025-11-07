import { UseContext } from 'react'
import { useForm } from 'react-hook-form'
import UserContext from '../../context/UserContext'

function RegistrationForm() {
  const { loginUser } = UseContext(UserContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
    <div>
      <h1>Welcome to website</h1>
      <form onSubmit={handleSubmit(loginUser)}>
        <label>Логин:</label>
        <input type="text" {...register('login', { required: true })} />
        <label>Email:</label>
        <input
          type="text"
          {...register('email', { required: true, pattern: /^\S+@\S+\.\S+$/ })}
        />
        {errors.login && <p>Email обязательно</p>}
        <label>Пароль:</label>
        <input
          type="text"
          {...register('password', { required: true, minLength: 6 })}
        />
        <button type="submit">регистрация</button>
      </form>
    </div>
  )
}
export default RegistrationForm
