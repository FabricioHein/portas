import styles from '../styles/Presente.module.css'

const Presente = (props)=>{
  return <div className={styles.presente }>
      <div className={styles.tampa}> {props.tampa || null}</div>
      <div className={styles.corpo}> {props.corpo || null}</div>
      <div className={styles.laco1}> </div>
      <div className={styles.laco2}> </div>           
      
  </div>;
}

export default Presente;