import Title from "../components/Title";
import Presente from "../components/Presente";
import Porta from '../components/Porta'

function Home() {
  return <div style={{display: 'flex'}}>
    {/* <Title/>
    <Presente/> */}
    <Porta selecionada />
    <Porta/>

  </div>;
}

export default Home;