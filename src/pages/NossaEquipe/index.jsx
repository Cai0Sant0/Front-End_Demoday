import './style.css';
import CardEquipe from '../../components/CardEquipe/CardEquipe';
import NavbarPadrao from '../../components/navbar';
import FooterPadrao from '../../components/footer';
import Topo from "../../components/ComponenteEscrolaPraCima";

import fotoCaio from '../../assets/images/imagemEquipe/Caio.jpg';
import fotoDavi from '../../assets/images/imagemEquipe/Davi.jpeg';
import fotoGabriel from '../../assets/images/imagemEquipe/Gabriel.jpeg';
import fotoGustavo from '../../assets/images/imagemEquipe/Gustavo.jpeg';
import fotoLivea from '../../assets/images/imagemEquipe/Livea.jpeg';
import fotoMelissa from '../../assets/images/imagemEquipe/Melissa.jpeg';
import fotoPedro from '../../assets/images/imagemEquipe/Pedro.jpeg';
import fotoSonia from '../../assets/images/imagemEquipe/Sonia.jpeg';




function NossaEquipe(){
    return(
        <>

          <Topo/>

          <NavbarPadrao/>


          <div className='AlinhaTextoNossaEquipe'>
            <h1 className='tituloNossaEquipe'>CONHEÇA NOSSA EQUIPE</h1>
          </div>

          <div className='linhaCard'>

            {<CardEquipe className = "cardsPerfil" nome={"Gustavo"} funcao={"Product Owner"} imgPerfil={fotoGustavo} linkGithub={"https://github.com/gusantos7"} linkInsta={"https://www.instagram.com/gu.santos7_/"} linkLinkedin={"https://www.linkedin.com/in/gustavosantossilva09/"}/> }

            {<CardEquipe className = "cardsPerfil" nome={"Gabriel"} funcao={"Scrum Master"} imgPerfil={fotoGabriel} linkGithub={"https://github.com/Rirfit"} linkInsta={"https://www.instagram.com/rirfit/"} linkLinkedin={"https://www.linkedin.com/in/rirfit/"}/>}

            {<CardEquipe className = "cardsPerfil" nome={"Pedro"} funcao={"Dev Front-End"} imgPerfil={fotoPedro} linkGithub={"https://github.com/Pedro-HTS"} linkLinkedin={"https://www.linkedin.com/in/pedrohenriquetorianisilva/"}/>}

            {<CardEquipe className = "cardsPerfil" nome={"Lívea"} funcao={"Dev Back-End"} imgPerfil={fotoLivea} linkGithub={"https://github.com/LiveaBrito"} linkInsta={"https://www.instagram.com/livea_brito/"} linkLinkedin={"https://www.linkedin.com/in/livea-brito-3092b3297"}/>}
            
          </div>

          <div className='linhaCard'>

            {<CardEquipe className = "cardsPerfil" nome={"Caio"}  funcao={"Dev Front-End"} imgPerfil={fotoCaio} linkGithub={"https://github.com/Cai0Sant0"} linkLinkedin={"https://www.linkedin.com/in/caio-barbosa-104santo/"} linkInsta = {"https://www.instagram.com/cai0.sant0/?next=%2F"}/>}

            {<CardEquipe className = "cardsPerfil" nome={"Melissa"}  funcao={"Designer UI/UX"} imgPerfil={fotoMelissa} linkLinkedin={"https://www.linkedin.com/in/melissa-de-almeida-dias-techlissa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} linkGithub={"https://github.com/lissalissa-hub"} linkInsta={"https://www.instagram.com/me_lissalissa/profilecard/?igsh=ejRuZDR6bnk3dWx6"}/>}


            {<CardEquipe className = "cardsPerfil" nome={"Davi"}  funcao={"Dev Front-End"} imgPerfil={fotoDavi} linkLinkedin={"https://www.linkedin.com/in/davi-barbosa-nunes-b990972a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"} linkGithub={"https://github.com/Braz4BR"} linkInsta={"https://www.instagram.com/dv.nnunes/"}/>}


            {<CardEquipe className = "cardsPerfil" nome={"Sônia"} funcao={"Designer UI/UX"} imgPerfil={fotoSonia} linkInsta={"https://www.instagram.com/soniaochoa__/"} linkLinkedin={"https://www.linkedin.com/in/soniaochoaa/"}/>}
            
          </div>

          <FooterPadrao/>
        </>
    )
}


export default NossaEquipe;