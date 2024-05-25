import { getUser } from "@/lib/data";
import styles from "./postUser.module.css";
import Image from "next/image";
// const getData = async (userId) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, { cache: "no-store" });
//     if (!res.ok) {
//       throw new Error("Something went wrong")
//     }
//     return res.json();
//   }
const PostUser = async ({ userId }) => {
    // const user = await getUser(userId);
    const user = await getUser(userId);
    console.log(user)
    return (

        <div className={styles.container}>
            <Image
                className={styles.avatar}
                src={user.img ? user.img : "/noavatar.png"}
                alt=""
                width={50}
                height={50} />
            <div className={styles.texts}>
                <span className={styles.username}>@_{user.email}</span>

                <span className={styles.title}>{user.username}</span>
            </div>
        </div>
    )
}

export default PostUser
