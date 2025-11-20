import {FaUser, FaLock} from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EsqueceuSenha.css";

const EsqueceuSenha = () => {

    const navigate = useNavigate();
    const [username, setUsername] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate("/codigo-de-verificação");
    };

 return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <h1>Esqueceu a senha?</h1>
            <div>
            <p>Não se preocupe, isso acontece! Digite seu e-mail abaixo e enviaremos um código de verificação para redefinir sua senha.</p>
            </div>
            <div className="input-field">
                <input 
                type="email" 
                placeholder="E-mail" 
                onChange={(e) => setUsername(e.target.value)}
                />
                <FaUser className="icon" />
            </div>

            <button>Confirmar</button>
        </form>
    </div>
  );
};


export default EsqueceuSenha;