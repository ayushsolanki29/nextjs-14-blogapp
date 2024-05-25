import Image from "next/image"
import styles from "./postCard.module.css"
import Link from "next/link"

const PostCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src={"/bitcoin.png"} alt="" fill className={styles.img} />
        </div>
        <span className={styles.date}>{post.createdAt.toString().slice(4,10)}</span>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detaildText}>
          <span className={styles.detaildTitle}>Author : </span>
          <span className={styles.detaildValue}>John</span>
        </div>
        <p className={styles.desc}>{post.body}</p>
        <Link className={styles.link} href={`/blog/${post.slug}`}>READ MORE</Link>
      </div>
    </div>
  )
}

export default PostCard