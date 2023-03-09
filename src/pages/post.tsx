import { Layout } from "../components/layout";
import mainStyles from '../components/layout/Main.module.sass'

const date = new Date()
const post =
  {
    src: '/assets/img/postHero.png',
    title: 'Case Study',
    topic: 'topic',
    user: 'user',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    subtitle: 'About this event',
    body: `What is Lorem Ipsum?
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    
    Why do we use it?
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
    
    
    Where does it come from?
    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`,
    date: date.toDateString(),
    address: 'Corn Exchange, Witney, Oxfordshire',
    fee: 'Free'
  }


export default function Post() {
  return (
    <Layout>
      <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
        <div style={{maxWidth: '800px', margin: 'auto'}}>
          <h1 className={mainStyles.h1}>
            Upgrading your remote business - Talk
          </h1>
          <p>{post.description}</p>
          <p>{post.date}</p>
        </div>
        <div className={mainStyles.postsContainer} style={{justifyContent: 'center'}}>
            <div className={mainStyles.post} style={{maxWidth: '80%', padding: 0}}> 
            <img src={post.src} width={'100%'} height={'auto'} alt='postImage'/>
            <p style={{textAlign:'left'}}>
              {post.address}
            </p>
            <div className={mainStyles.bubblesContainer}>
              <section className={mainStyles.bubbleSectionL}>
                <div className={mainStyles.bubble} style={{background: 'white', color: '#f60'}}>{post.fee}</div>
                <div className={mainStyles.bubble} style={{background: 'white', color: '#f60'}}>{post.date}</div>
              </section>
              <button className={mainStyles.bubbleSectionR} style={{background:'#f60', color: 'white', border: 0, padding: '5px'}}>
                Sign up to this event
              </button>
            </div>
            <div style={{maxWidth: '800px', margin: 'auto'}}>
              <h2 style={{color:'#f60'}}>{post.subtitle}</h2>
              <p style={{color: 'black'}}>{post.body}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
