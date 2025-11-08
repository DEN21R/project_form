import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import UserContext from '../../context/UserContext'
import styles from './styles.module.css'

function RegistrationForm() {
  const { loginUser } = useContext(UserContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to website</h1>
      <form className={styles.formBlock} onSubmit={handleSubmit(loginUser)}>
        <div className={styles.inputBlock}>
          <label>Логин:</label>
          <input
            type="text"
            {...register('login', { required: 'Поля должны быть заполнены' })}
          />
          <span
            className={`${styles.errorMessage} ${
              errors.email ? styles.show : ''
            }`}
          >
            {errors.email?.message}
          </span>
        </div>
        <div className={styles.inputBlock}>
          <label>Email:</label>
          <input
            type="text"
            {...register('email', {
              required: 'Поля должны быть заполнены',
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: `Email должен содержать"@"`,
              },
            })}
          />
          <span
            className={`${styles.errorMessage} ${
              errors.email ? styles.show : ''
            }`}
          >
            {errors.email?.message}
          </span>
        </div>

        <div className={styles.inputBlock}>
          <label>Пароль:</label>
          <input
            type="text"
            {...register('password', {
              required: 'Поля должны быть заполнены',
              minLength: {
                value: 6,
                message: 'Пароль не менее 6 символов',
              },
            })}
          />
          <span
            className={`${styles.errorMessage} ${
              errors.password ? styles.show : ''
            }`}
          >
            {errors.password?.message}
          </span>
        </div>
        <button className={styles.btn} type="submit">
          регистрация
        </button>
      </form>
    </div>
  )
}
export default RegistrationForm
