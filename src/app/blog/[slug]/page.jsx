import Image from 'next/image'
import styles from './singlepost.module.css'
import PostUser from '@/components/postUsers/postUser';
import { Suspense } from 'react';
import { getPost } from '@/lib/data';

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`);
  if (!res.ok) {
    throw new Error("Something went wrong")
  }
  return res.json();
}
export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.desc,
  }
};

const page = async ({ params }) => {
  const { slug } = params;
  // const post = await getPost(slug);
  const post = await getData(slug);
  return (
    <div className={styles.container}>

      <div className={styles.imgContainer}>
        <Image src="/bitcoin.png" alt="" fill className={styles.img} />
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Suspense fallback="Loading...">

            <PostUser userId={post.userId} />

          </Suspense>

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>{post.createdAt.toString().slice(4, 16)}</span>
          </div>

        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  )
}

export default page
