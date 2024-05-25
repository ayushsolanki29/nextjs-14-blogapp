import styles from './register.module.css'
import RegisterForm from '@/components/registerForm/registerForm'

const registerPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2>Register Your Account</h2>
     <RegisterForm/>
      </div>
    </div>
  )
}

export default registerPage
