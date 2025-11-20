import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./CodigoVerificacao.css";

const CodigoVerificacao = () => {

    const navigate = useNavigate();
    const [code, setCode] = useState(["", "", "", "", "", ""]);
    const inputsRef = useRef([]);

    
  const handleChange = (index, event) => {
    const value = event.target.value;

    if (/^\d*$/.test(value) && value.length <= 1) { // permite apenas um dígito numérico
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value && index < 5) {
        inputsRef.current[index + 1].focus(); // pula pro próximo input se um dígito for inserido
      }
    }
  };

  const handleKeyDown = (index, event) => {

    if (event.key === 'Backspace' && !code[index] && index > 0) {
      inputsRef.current[index - 1].focus(); // volta pro input anterior ao apagar
    }
  };

    const handleSubmit = (event) => {
    event.preventDefault();
    const fullCode = code.join('');
    if (fullCode.length === 6) {
      console.log('Código completo:', fullCode);
    } else {
      alert('Por favor, insira o código completo.');
    }
    navigate("/nova-senha");
  };

  return (
    <div className="container">
      <h1>Verificação de E-mail</h1>
      <p>Por favor, insira o código de 6 dígitos enviado para o seu e-mail.</p>
      <form onSubmit={handleSubmit}>
        <div className="code-inputs">
          {code.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputsRef.current[index] = el)}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(index, e)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              aria-label={`Dígito ${index + 1} do código de verificação`}
              required
            />
          ))}
        </div>
        <button>Verificar Código</button>
      </form>
    </div>
  );
};

export default CodigoVerificacao;