import { Route, Routes as Switch } from "react-router-dom";

import Home from "../pages/Home";
import Login02 from "../pages/Login02";
import Cadastro02 from "../pages/Cadastro02";
import Cadastro02Kid from "../pages/CadastroKid02";
import IA from "../pages/IA";
import Jogos from "../pages/Jogos";
import Sobre02 from "../pages/Sobre02";
import Blog02 from "../pages/Blog02";
import EscolhaPerfil from "../pages/EscolhaPerfil";
import NossaEquipe from "../pages/NossaEquipe";
import TesteIa from "../pages/TesteIa";
import Parceiros from "../pages/Parceiros";
import Pagamento from "../pages/PagamentoPlano";
import TelaUsuarioFotoPerfil from "../pages/FotoPerfilUsuario";
import ConfigUsuario from "../pages/ConfiguracaoUsuario";
import AR from "../pages/AR";

function AppRoutes() {
  return (
    <Switch>

      <Route path="/" element={<Home />} />
      <Route path="/parceiros" element={<Parceiros />} />

      <Route path="/cadastro" element={<Cadastro02 />} />
      <Route path="/cadastroKid" element={<Cadastro02Kid />} />
      <Route path="/login" element={<Login02 />} />
      <Route path="/fotoUsuario" element={<TelaUsuarioFotoPerfil />} />
      <Route path="/configuracaoUsuario" element={<ConfigUsuario />} />

      <Route path="/nossaEquipe" element={<NossaEquipe />} />
      <Route path="/escolhaPerfil" element={<EscolhaPerfil />} />

      <Route path="/ia" element={<IA />} />
      <Route path="/testeIa" element={<TesteIa />} />
      
      <Route path="/sobre" element={<Sobre02 />} /> 
      <Route path="/jogos" element={<Jogos />} />
      <Route path="/blog" element={<Blog02 />} />

      <Route path="/pagamento" element={<Pagamento />} />

      <Route path="/AR" element={<AR />} />
    </Switch>
  );
}

export default AppRoutes;
