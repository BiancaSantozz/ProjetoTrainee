import { useState } from "react";
import { FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./NovaSenha.css";

const NovaSenha = () => {

    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
    const handleSubmit = (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("As senhas não coincidem!");
            return;
        }
        if (password.length < 6) {
            alert("A senha deve ter pelo menos 6 caracteres.");
            return;
        }

        navigate("/");
    };

  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
        <h1>Nova senha</h1>
        <p>Digite sua nova senha nos campos abaixo.</p>
             <div className="input-field">
                <input 
                type="password" 
                placeholder="Nova Senha" 
                onChange={(e) => setPassword(e.target.value)}
                />
                <FaLock className="icon" />
             </div>

             <div className="input-field">
                <input 
                type="password" 
                placeholder="Confirmar Senha"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
            />
                <FaLock className="icon" />
            </div>

            <button>Confirmar alteração de senha</button>

        </form>
    </div>
  );
};

export default NovaSenha;