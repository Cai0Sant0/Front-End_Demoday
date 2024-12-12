import { Route, Routes as Switch } from "react-router-dom";

import Home from "../pages/Home";
import Login02 from "../pages/Login02";
import Cadastro02 from "../pages/Cadastro02";
import Cadastro02Kid from "../pages/CadastroKid02";
import IA from "../pages/IA";
import Jogos from "../pages/Jogos";
import Sobre02 from "../pages/Sobre02";
import Blog02 from "../pages/Blog02";
import NossaEquipe from "../pages/NossaEquipe";
import TesteIa from "../pages/TesteIa";
import Parceiros from "../pages/Parceiros";
import Pagamento from "../pages/PagamentoPlano";
import TelaUsuarioFotoPerfil from "../pages/FotoPerfilUsuario";
import ConfigUsuario from "../pages/ConfiguracaoUsuario";

import HomeLogado from "../pages/HomeLogado";
import IALogado from "../pages/IA_Logado";
import JogosLogado from "../pages/JogosLogado";
import NossaEquipeLogado from "../pages/NossaEquipeLogado";
import PagamentoLogado from "../pages/PagamentoPlanoLogado";
import ParceirosLogado from "../pages/ParceirosLogado";
import Sobre02Logado from "../pages/Sobre02Logado";
import TesteIaLogado from "../pages/TesteIaLogado";
import Blog02Logado from "../pages/Blog02Logado";

function AppRoutes() {
  return (
    <Switch>

      <Route path="/" element={<Home />} />
      <Route path="/logado" element={<HomeLogado/>}/>
      <Route path="/parceiros" element={<Parceiros />} />

      <Route path="/cadastro" element={<Cadastro02 />} />
      <Route path="/cadastroKid" element={<Cadastro02Kid />} />
      <Route path="/login" element={<Login02 />} />
      <Route path="/fotoUsuario" element={<TelaUsuarioFotoPerfil />} />
      <Route path="/configuracaoUsuario" element={<ConfigUsuario />} />

      <Route path="/nossaEquipe" element={<NossaEquipe />} />

      <Route path="/ia" element={<IA />} />
      <Route path="/testeIa" element={<TesteIa />} />
      
      <Route path="/sobre" element={<Sobre02 />} /> 
      <Route path="/jogos" element={<Jogos />} />
      <Route path="/blog" element={<Blog02 />} />

      <Route path="/pagamento" element={<Pagamento />} />


      <Route path="/iaLogado" element={<IALogado/>} />
      <Route path="/jogosLogado" element={<JogosLogado/>} />
      <Route path="/blogLogado" element={<Blog02Logado/>} />
      <Route path="/NossaEquipeLogado" element={<NossaEquipeLogado/>} />
      <Route path="/pagamentoLogado" element={<PagamentoLogado/>} />
      <Route path="/parceirosLogado" element={<ParceirosLogado/>} />
      <Route path="/sobreLogado" element={<Sobre02Logado/>} />
      <Route path="/TesteIaLogado" element={<TesteIaLogado/>} />

    </Switch>
  );
}

export default AppRoutes;
