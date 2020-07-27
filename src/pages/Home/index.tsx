import React from 'react';
import { FiLogIn } from 'react-icons/fi'; // importando pacote de father icons
import { Link } from 'react-router-dom'; // substitui o a href="" por Link to="", assim mantendo a troca de rotas em uma so pagina
import './styles.css';

const Home = () => {
    return (
        <div id="page-home">
            <div className="content">
                <main>
                    <h1>Bem vindo ao meu currículo!</h1>
                    <p>Espero que goste desta breve apresentação.</p>
                    <Link to="/curriculum">
                        <span>
                            <FiLogIn />
                        </span>
                        <strong>
                            Go!
                        </strong>
                    </Link>
                </main>
            </div>
        </div>
    );
}

export default Home;