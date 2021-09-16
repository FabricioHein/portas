import { useState } from 'react';
import styles from '../styles/Porta.module.css'
import Button from './Button';

const Porta = (props) => {

    const [numero, setNumero] = useState(3)

    function Evento() {
        setNumero(numero + 200)
    }

    return (

        <div className={styles.porta}>
            <div className={styles.numero}>{props.numero || numero}</div>
            <Button
            action={Evento}
            name={'Mude o valor'}           
            
            />

        </div>)
}



export default Porta;