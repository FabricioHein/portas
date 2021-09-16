import styles from '../styles/Presente.module.css'

const Presente = (props)=>{
  return <div className={styles.presente }>
      <div className={styles.tampa}> {props.tampa || 'Tampa'}</div>
      <div className={styles.corpo}> {props.corpo || 'Corpo'}</div>      
      
  </div>;
}

export default Presente;