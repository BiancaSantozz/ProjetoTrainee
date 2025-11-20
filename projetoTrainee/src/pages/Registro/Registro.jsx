import {FaUser, FaLock, FaUserTag} from "react-icons/fa";
import { useState } from "react";
import "./Registro.css";

const Registrar = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
    };

 return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <h1>Registrar-se</h1>
            <p>É novo por aqui? Crie sua conta, junte-se a nós e comece sua jornada hoje mesmo!</p>
            <div className="input-field">
                 <input
                type="username"
                placeholder="Nome de Usuário"
                onChange={(e) => setUsername(e.target.value)}
                />
                 <FaUserTag className="icon" />
            </div>
            <div className="input-field">
                <input 
                type="email" 
                placeholder="E-mail" 
                onChange={(e) => setUsername(e.target.value)}
                />
                <FaUser className="icon" />
            </div>
            <div className="input-field">
                <input 
                type="password" 
                placeholder="Senha" 
                onChange={(e) => setPassword(e.target.value)}
                />
                <FaLock className="icon" />
            </div>

            <button>Cadastrar</button>
        </form>
    </div>
  );
};


export default Registrar;