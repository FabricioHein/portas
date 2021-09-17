import { useState } from 'react';
import styles from '../styles/Porta.module.css'
import Button from './Button';

const Porta = (props) => {

    const [numero, setNumero] = useState(3)

    function Evento() {
        setNumero("Mudou")
        console.log(numero)

    }

    const selecionada = props.selecionada? styles.selecionada  : ''

    return (
<div className={styles.area}>
<div className={`${styles.estrutura} ${selecionada}`}>
    <div className={styles.porta}>
    <div className={styles.numero}>{props.numero || numero}</div>
    <div className={styles.macaneta}></div>
    </div>
            {/* <Button
            action={Evento}
            name={'Mude o valor'}           
            
            />
            <input
            value={numero}
            onChange={e => setNumero(e.target.value)}
            
            /> */}

        </div>
        <div className={styles.chao}></div>

</div>
        )
}



export default Porta;