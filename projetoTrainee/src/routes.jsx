import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Registrar from "./pages/Registro/Registro";
import EsqueceuSenha from "./pages/EsqueceuSenha/EsqueceuSenha";
import CodigoVerificacao from "./pages/EsqueceuSenha/CodigoVerificacao";
import NovaSenha from "./pages/EsqueceuSenha/NovaSenha";

function MainRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/Registrar" element={<Registrar />}/>
            <Route path="/esqueceu-a-senha" element={<EsqueceuSenha />}/>
            <Route path="/codigo-de-verificação" element={<CodigoVerificacao />}/>
            <Route path="/nova-senha" element={<NovaSenha />}/>
        </Routes>
    )
}

export default MainRoutes;