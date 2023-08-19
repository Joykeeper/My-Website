import styles from './Phrase.module.css'

const Phrase = ({text, author}) => {
  return (
    <div className={styles.phrase}>
      <div>
      <p><i>{text}"There is no end to education"</i>
      <br/>
      <i>-{author}Jiddu Krishnamurti</i></p>
      </div>
    </div>
  )
}

export default Phrase