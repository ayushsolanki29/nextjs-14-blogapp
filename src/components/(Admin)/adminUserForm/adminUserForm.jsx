"use client"
import { addUser } from '@/lib/actions';
import styles from './adminUserForm.module.css'
import { useFormState } from "react-dom";

const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined)
  return (
    <form action={formAction} className={styles.form}>
      <h1>Add New User</h1>

      <input type="text" name='username' placeholder='Title' />
      <input type="text" name='email' placeholder='email' />
      <input type="password" name='password' placeholder='password' />
      <select name="isAdmin" >
        <option value="true">Admin</option>
        <option value="false">user</option>

      </select>

      <button>Add User</button>
      {state && state.error}
    </form>
  )
}
export default AdminUserForm
