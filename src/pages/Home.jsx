import '../styles/Home.css';
import { Link } from 'react-router';
import { useNavigate } from 'react-router';

export default function Home() {
  
    const navigate = useNavigate();
    const goPage = () => {
        navigate("/Works")
    }

   
    return(
        <section className='home_main'>
            <h2 className='home_title'>
                <p> Etudiant juriste en droit public</p>
                <p>et</p>
                <p>Développeur web frontend</p>
            </h2>
            <button onClick={goPage} className='home_bt'>
                Parcourez mes travaux  
            </button>
        </section>
    );
}