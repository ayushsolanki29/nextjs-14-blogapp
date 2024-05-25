import PostCard from '@/components/postCards/postCard'
import styles from './blog.module.css'
import { getPosts } from '@/lib/data';
// BY API 
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog", { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Something went wrong")
  }
  return res.json();
}
export const metadata = {
  title: "Blog Page",
  description: "Blog Page is here",
};
const Blog = async () => {
  const posts = await getData();
  //  const posts = await getPosts();

  return (
    <div className={styles.container}>

      {posts.map((post) => (
        <div className={styles.post} key={post.id} >
          <PostCard post={post} />
        </div>
      ))}

    </div>
  )
}

export default Blog
