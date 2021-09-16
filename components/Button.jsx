import style from '../styles/Button.module.css'

const Button = (props) => {

    function action() {
        console.log('teste')
        
    }
    return (
        <button
            className={style.button}
            onClick={props.action || action }
        >
            {props.name || 'Click Aqui'}

        </button>


    )


}

export default Button