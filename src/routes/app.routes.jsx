import { Route, Routes as Switch } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import CadastroKid from "../pages/CadastroKid";
import IA from "../pages/IA";
import Jogos from "../pages/Jogos";
import Sobre from "../pages/Sobre";
import Blog02 from "../pages/Blog02";
import EscolhaPerfil from "../pages/EscolhaPerfil";
import NossaEquipe from "../pages/NossaEquipe";
import TesteIa from "../pages/TesteIa";
import Parceiros from "../pages/Parceiros";
import Pagamento from "../pages/PagamentoPlano";
import TelaUsuarioFotoPerfil from "../pages/FotoPerfilUsuario";
import ConfigUsuario from "../pages/ConfiguracaoUsuario";

function AppRoutes() {
  return (
    <Switch>

      <Route path="/" element={<Home />} />
      <Route path="/parceiros" element={<Parceiros />} />

      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/cadastroKid" element={<CadastroKid />} />
      <Route path="/login" element={<Login />} />
      <Route path="/fotoUsuario" element={<TelaUsuarioFotoPerfil />} />
      <Route path="/configuracaoUsuario" element={<ConfigUsuario />} />

      <Route path="/nossaEquipe" element={<NossaEquipe />} />
      <Route path="/escolhaPerfil" element={<EscolhaPerfil />} />

      <Route path="/ia" element={<IA />} />
      <Route path="/testeIa" element={<TesteIa />} />

      <Route path="/sobre" element={<Sobre />} />
      <Route path="/jogos" element={<Jogos />} />
      <Route path="/blog" element={<Blog02 />} />

      <Route path="/pagamento" element={<Pagamento />} />
    </Switch>
  );
}

export default AppRoutes;
