import { Suspense } from 'react'
import styles from './admin.module.css'
import AdminPosts from '@/components/(Admin)/adminPosts/adminPosts'
import AdminPostForm from '@/components/(Admin)/adminPostForm/adminPosts'
import AdminUserForm from '@/components/(Admin)/adminUserForm/adminUserForm'
import AdminUsers from '@/components/(Admin)/adminUsers/adminUsers'
import { auth } from '@/lib/auth'
const Admin = async () => {
  const session = await auth();
  return (
    <div className={styles.container}>

      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPosts />
          </Suspense>
        </div>
        <div className={styles.col}>
          
            <AdminPostForm  userId={session.user.id}/>
         
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUsers />
          </Suspense>
        </div>
        <div className={styles.col}>
         
            <AdminUserForm />
          
        </div>
      </div>

    </div>
  )
}

export default Admin
