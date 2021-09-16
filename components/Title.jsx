import { useState, useEffect} from "react";

const Title = ()=>{
  const [title, setTitle] = useState('Projeto Sorteio das Portas')
  
 
  
  return(
<div>
<h1>{title}</h1>
<button
onClick={()=>{setTitle('O jogo Começou, siga as regras')}}

/>
</div>  )
}

export default Title;


