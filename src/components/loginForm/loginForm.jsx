"use client"
import { handleGithubLogin, login } from "@/lib/actions"
import styles from './loginform.module.css'
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import Link from "next/link";
const LoginForm = () => {
    const [state, formAction] = useFormState(login, undefined);

    const router = useRouter();

    useEffect(() => {
        state?.success && router.push("/");
    }, [state?.success, router])

    return (
        <div>

            <form className={styles.form} action={formAction}>
                <input type="text" placeholder="username" name="username" />
                <input type="password" placeholder="password" name="password" />
                <button>Login with Email </button>
                <Link href={"/register"}>Have not an Account ? <b>Register here</b> </Link>
            </form>
        </div>
    )
}

export default LoginForm
