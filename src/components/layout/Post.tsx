import { Layout } from ",.layout";
import mainStyles from '../components/layout/Main.module.sass'


export default function Post() {
  return (
    <Layout>
      <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
          <h1 className={mainStyles.h1}>
            Upgrading your remote business - Talk
          </h1>
          <p>{post.description}</p>
          <p>{post.date}</p>
        <div className={mainStyles.postsContainer}>
            <div className={mainStyles.post}> 
            <img src={post.src} width={'100%'} height={'auto'} alt='postImage'/>
            <p>
              {post.address}
            </p>
            <div className={mainStyles.bubblesContainer}>
              <section className={mainStyles.bubbleSectionL}>
                <div className={mainStyles.bubble}>{post.topic}</div>
                <div className={mainStyles.bubble}>{post.user}</div>
              </section>
              <div className={mainStyles.bubbleSectionR}>{post.date}</div>  
            </div>
            <div>
              <h2>{post.subtitle}</h2>
              <p>{post.body}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
