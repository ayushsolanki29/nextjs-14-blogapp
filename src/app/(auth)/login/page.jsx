import { handleGithubLogin } from "@/lib/actions";
import styles from "./login.module.css"
import LoginForm from '@/components/loginForm/loginForm';


const Login = async () => {

  return (


    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2>Login to Your Account</h2>
        <form className={styles.github} action={handleGithubLogin}>
          <button>Login with Github</button>
        </form>

        OR
        <LoginForm />
      </div>
    </div>

  )
}

export default Login
