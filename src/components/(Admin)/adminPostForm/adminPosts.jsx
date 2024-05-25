"use client"
import { addPost } from '@/lib/actions'
import styles from './adminPostForm.module.css'
import { useFormState } from "react-dom";
const AdminPostForm = ({userId}) => {
  const [state, formAction] = useFormState(addPost, undefined)
  return (
    <form action={formAction} className={styles.form}>
      <h1>Add New Post</h1>
      <input type="hidden" name='userId' value={userId} />
      <input type="text" name='title' placeholder='Title' />
      <input type="text" name='slug' placeholder='write a space as with "-"  ' />
      <input type="text" name='img' placeholder='img' />
      <textarea name='desc' placeholder='Desctiption' rows={10} ></textarea>
      <button>Add Post</button>
      {state && state.error}
    </form>
  )
}

export default AdminPostForm
