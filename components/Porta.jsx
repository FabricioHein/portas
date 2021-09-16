import { useState } from 'react';
import styles from '../styles/Porta.module.css'
import Button from './Button';

const Porta = (props) => {

    const [numero, setNumero] = useState(3)

    function Evento() {
        setNumero("Mudou")
        console.log(numero)
    }

    return (
<div className={styles.area}>
<div className={styles.estrutura}>
    <div className={styles.porta}>
    <div className={styles.numero}>{props.numero || numero}</div>


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

</div>
        )
}



export default Porta;