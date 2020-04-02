import React ,{ useState }from 'react';
import { FiLogIn } from 'react-icons/fi';
import {Link,useHistory} from 'react-router-dom';//para troca de páginas(troca de rota).
import './styles.css';
import api from '../../services/api';
import herosImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon(){
        const [id,setId] = useState();

        const history = useHistory();

    async function handleLogon(e){
            e.preventDefault();

            try {
                const response = await api.post('sessions', {id});
                
                localStorage.setItem('ongId',id);
                localStorage.setItem('ongName', response.data.name);
                
                history.push('/profile');

            } catch (err) {
                alert("Falha no Login, tente novamente");
            }
        }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Heroes" />

                <form onSubmit={handleLogon}>
                    <h1>Faça Seu Logon</h1>
                        <input placeholder="Sua id"
                            value={id}
                            onChange={ e => setId(e.target.value)}
                        />
                        <button className="button" type="submit">Entrar</button>


                     <Link className ="back-link" to="/register">
                         <FiLogIn size="16" color="#E02041"/>
                        Não tenho cadastro.
                     </Link>

                </form>
                    
            </section>

        <img src={herosImg} alt="Heroes"/>
        </div>
    );

}