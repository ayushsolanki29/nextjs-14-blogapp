"use client"
import { register } from "@/lib/actions";
import styles from "./register.module.css";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import Link from "next/link";
const RegisterForm = () => {

const [state, formAction] = useFormState(register, undefined);

const router = useRouter();

useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router])

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="username" name="username" />
      <input type="email" placeholder="Email" name="email" />
      <input type="password" placeholder="password" name="password" />
      <input type="password" placeholder="password Again" name="passwordrepeat" />
      <button>Register </button>

      {state?.error}
      <Link href={"/login"}>Have and Account ? <b>Login </b></Link>
    </form>
  )
}
export default RegisterForm;