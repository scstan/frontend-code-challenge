import Link from "next/link";

import { Layout } from "../components/layout";
import styles from '../components/layout/Main.module.sass';


const date = new Date()
const posts = Array.apply(null, Array(5)).map(() => 
  ({
    src: '/assets/img/post.png',
    slug: 'caseStudy',
    title: 'Case Study',
    topic: 'topic',
    user: 'user',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    date: date.toDateString()
  })
)

export default function Home() {
  return (
    <Layout>
      <div>
        <h1 className={styles.h1}>
          Checkout our latest Posts
        </h1>
        <div className={styles.postsContainer}>
          {
            posts.map((post, i) => (
              <Link href={`/post/?slug=${post.slug}`} key={i} style={{textDecoration: 'none', color: '#800000'}}>
                <div className={styles.post}> 
                  <img src={post.src} width={'100%'} height={'auto'} alt='postImage'/>
                  <h3>
                    {post.title}
                  </h3>
                  <div className={styles.bubblesContainer}>
                    <section className={styles.bubbleSectionL}>
                      <div className={styles.bubble}>{post.topic}</div>
                      <div className={styles.bubble}>{post.user}</div>
                    </section>
                    <div className={styles.bubbleSectionR}>{post.date}</div>  
                  </div>
                  <p>{post.description}</p>
                </div>
              </Link>
            ))
          }
        </div>
      </div>
    </Layout>
  )
}
